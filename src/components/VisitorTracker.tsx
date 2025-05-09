'use client';

import { useEffect } from 'react';

export default function VisitorTracker() {
  useEffect(() => {
    const trackVisitor = async () => {
      console.log('Attempting to track visitor...');
      try {
        const response = await fetch('/api/track-visitor', {
          method: 'POST',
        });
        console.log('Visitor tracking response:', response.status);
      } catch (error) {
        console.error('Error tracking visitor:', error);
      }
    };

    trackVisitor();
  }, []);

  return null;
} 