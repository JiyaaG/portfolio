import { NextRequest, NextResponse } from 'next/server';
import { initializeGoogleSheets, getVisitorData, updateVisitorData } from '@/utils/googleSheets';

export async function POST(req: NextRequest) {
  console.log('Track visitor API called');
  try {
    const forwardedFor = req.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0] : 'unknown';
    const userAgent = req.headers.get('user-agent') || 'unknown';
    
    console.log('Visitor details:', { ip, userAgent });
    
    const sheets = await initializeGoogleSheets();
    const existingVisitor = await getVisitorData(sheets, ip, userAgent);
    
    // Convert to IST (UTC+5:30)
    const now = new Date();
    const istTime = new Date(now.getTime() + (5.5 * 60 * 60 * 1000));
    
    const visitorData = {
      ip,
      userAgent,
      count: existingVisitor ? existingVisitor.count + 1 : 1,
      lastVisitedAt: istTime.toISOString(),
    };

    await updateVisitorData(sheets, visitorData);
    console.log('Visitor data updated successfully');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error tracking visitor:', error);
    return NextResponse.json(
      { error: 'Failed to track visitor' },
      { status: 500 }
    );
  }
} 