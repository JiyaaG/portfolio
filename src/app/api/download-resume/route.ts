import { NextRequest, NextResponse } from 'next/server';
import { initializeGoogleSheets } from '@/utils/googleSheets';

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
const SHEET_NAME = 'Visitor Details';

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
      range: `${SHEET_NAME}!A1:C1`,
      valueInputOption: 'RAW',
      requestBody: {
        values: [['Name', 'Email', 'Downloaded At']],
      },
    });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, email } = await req.json();
    
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    const sheets = await initializeGoogleSheets();
    await ensureSheetExists(sheets);

    // Convert to IST (UTC+5:30)
    const now = new Date();
    const istTime = new Date(now.getTime() + (5.5 * 60 * 60 * 1000));
    
    // Append visitor data to the sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:C`,
      valueInputOption: 'RAW',
      requestBody: {
        values: [[name, email, istTime.toISOString()]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error handling resume download:', error);
    return NextResponse.json(
      { error: 'Failed to process download' },
      { status: 500 }
    );
  }
} 