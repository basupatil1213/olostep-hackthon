import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";
import { useEffect, useRef } from "react";
import "highlight.js/styles/github-dark.css"; // You can choose any Highlight.js theme

hljs.registerLanguage("html", html);

type CodeSnippetProps = {
  displayCode: string;
};

const CodeSnippet = ({ displayCode }: CodeSnippetProps) => {
  const codeRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [displayCode]);

  return (
    <div className="text-white rounded-lg overflow-auto p-4 scroll-m-2 h-80  shadow-lg bg-gray-800">
      <pre className="whitespace-pre-wrap break-words">
        <code
          className="html"
          ref={codeRef}
        >
          {displayCode}
        </code>
      </pre>
    </div>
  );
};

export default CodeSnippet;
