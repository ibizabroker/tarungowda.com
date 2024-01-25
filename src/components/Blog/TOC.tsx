'use client'

import { useEffect } from "react";
import tocbot from "tocbot";

export default function Toc() {
  useEffect(() => {
    tocbot.init({
      tocSelector: ".toc-content",
      contentSelector: ".user-content",
      headingSelector: "h1, h2, h3",
      headingsOffset: 100,
      scrollSmoothOffset: -100,
      scrollSmoothDuration: 300,
      hasInnerContainers: true,
    });

    return () => tocbot.destroy();
  }, []);

  return (
    <div className="toc">
      <div className="toc-card">
        <div className="toc-head">
          <span>Table of Contents</span>
        </div>
        <div className="toc-content"></div>
      </div>
    </div>
  );
}