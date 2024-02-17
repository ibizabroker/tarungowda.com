'use client'

import { MdContentCopy, MdDone } from "react-icons/md";
import { useEffect, useState, useRef } from "react";

export default function Pre({ ...props }) {
  const [isCopied, setIsCopied] = useState(false);
  const codeContent = useRef<HTMLInputElement>(null);

  async function copyToClipboard(text: any) {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch (error: any) {
      alert((error && error.message) || "Failed to copy to clipboard.");
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCopied(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [isCopied]);

  return (
    <>
      <button
        className={isCopied ? 'pre-copy pre-copy-done' : 'pre-copy' } {...props}
        onClick={() => copyToClipboard(
          codeContent.current!==null ? codeContent.current.textContent : null
        )}
        title="Copy"
      >
        {isCopied ? (
          <span className='pre-icon-done'>
            <MdDone />
          </span>
        ) : (
          <span className='pre-icon-copy'>
            <MdContentCopy />
          </span>
        )}
      </button>
      <pre className='pre' {...props} ref={codeContent}>
        {props.children}
      </pre>
    </>
  );
}