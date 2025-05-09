import { google } from 'googleapis';
import { JWT } from 'google-auth-library';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
const SHEET_NAME = 'Visitors';

interface VisitorData {
  ip: string;
  userAgent: string;
  count: number;
  lastVisitedAt: string;
}

let sheetsClient: any = null;

async function ensureSheetExists(sheets: any) {
  try {
    // Try to get the sheet
    await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A1`,
    });
  } catch (error) {
    // If sheet doesn't exist, create it
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: SPREADSHEET_ID,
      requestBody: {
        requests: [
          {
            addSheet: {
              properties: {
                title: SHEET_NAME,
              },
            },
          },
        ],
      },
    });

    // Add headers
    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A1:D1`,
      valueInputOption: 'RAW',
      requestBody: {
        values: [['Visitor IP', 'User Agent', 'Count', 'Last Visited At']],
      },
    });
  }
}

export async function initializeGoogleSheets() {
  if (sheetsClient) {
    return sheetsClient;
  }

  const auth = new JWT({
    email: process.env.GOOGLE_CLIENT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    scopes: SCOPES,
  });

  sheetsClient = google.sheets({ version: 'v4', auth });
  await ensureSheetExists(sheetsClient);
  return sheetsClient;
}

export async function getVisitorData(sheets: any, ip: string, userAgent: string) {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:D`,
    });

    const rows = response.data.values || [];
    const visitorIndex = rows.findIndex(
      (row: any[]) => row[0] === ip && row[1] === userAgent
    );

    if (visitorIndex === -1) {
      return null;
    }

    return {
      ip: rows[visitorIndex][0],
      userAgent: rows[visitorIndex][1],
      count: parseInt(rows[visitorIndex][2]),
      lastVisitedAt: rows[visitorIndex][3],
    };
  } catch (error) {
    console.error('Error fetching visitor data:', error);
    return null;
  }
}

export async function updateVisitorData(
  sheets: any,
  visitorData: VisitorData
) {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:D`,
    });

    const rows = response.data.values || [];
    const visitorIndex = rows.findIndex(
      (row: any[]) => row[0] === visitorData.ip && row[1] === visitorData.userAgent
    );

    if (visitorIndex === -1) {
      // Add new visitor
      await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}!A:D`,
        valueInputOption: 'RAW',
        requestBody: {
          values: [[
            visitorData.ip,
            visitorData.userAgent,
            visitorData.count,
            visitorData.lastVisitedAt,
          ]],
        },
      });
    } else {
      // Update existing visitor
      await sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}!A${visitorIndex + 1}:D${visitorIndex + 1}`,
        valueInputOption: 'RAW',
        requestBody: {
          values: [[
            visitorData.ip,
            visitorData.userAgent,
            visitorData.count,
            visitorData.lastVisitedAt,
          ]],
        },
      });
    }
  } catch (error) {
    console.error('Error updating visitor data:', error);
    throw error;
  }
} 