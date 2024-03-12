'use client';

import { useEffect } from 'react';
import tocbot from 'tocbot';

export default function Toc() {
  useEffect(() => {
    tocbot.init({
      tocSelector: '.toc-content',
      contentSelector: '.user-content',
      headingSelector: 'h1, h2, h3, h4, h5, h6',
      headingsOffset: 75,
      scrollSmoothOffset: -75,
      scrollSmoothDuration: 300,
      hasInnerContainers: true,
    });

    return () => tocbot.destroy();
  }, []);

  return (
    <div className='toc'>
      <div className='toc-card'>
        <div className='toc-head'>
          <span>Table of Contents</span>
        </div>
        <div className='toc-content'></div>
      </div>
    </div>
  );
}