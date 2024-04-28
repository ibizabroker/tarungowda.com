'use client';
 
import { useEffect } from 'react';
 
export default function PageView({ slug, category }: { slug: string, category: string }) {
  useEffect(() => {
    fetch("/api/upstash/increment-count", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ slug, category }),
    });
  }, [slug]);
 
  return null;
};