import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";
import { useEffect, useRef } from "react";

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
    <pre className="w-full">
      <code
        className="html"
        ref={codeRef}
      >
        {displayCode}
      </code>
    </pre>
  );
};

export default CodeSnippet;
