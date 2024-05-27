'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function ProjectImage({ src, title }: { src: string, title: string }) {
  const [zoomedImage, setZoomedImage] = useState(null);
  const base64data = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNc0PahHgAGewKXqgTxrAAAAABJRU5ErkJggg==";

  const openZoomedImage = (imageUrl: any) => {
    setZoomedImage(imageUrl);
  };
  
  const closeZoomedImage = () => {
    setZoomedImage(null);
  };

  return (
    <>
      <Image
        className="project-cover"
        src={src}
        alt={title}
        fill
        placeholder="blur"
        blurDataURL={base64data}
        onClick={() => openZoomedImage(src)}
      />
      {zoomedImage && (
        <div className="zoomed-image-container" onClick={closeZoomedImage}>
          <Image
            src={zoomedImage} 
            alt="zoomed-image" 
            fill
            objectFit="contain"
          />
        </div>
      )}
    </>
  );
}