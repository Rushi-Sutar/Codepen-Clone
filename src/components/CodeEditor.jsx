import { Editor } from "@monaco-editor/react";
import React, { useEffect, useState } from "react";

function CodeEditor() {
  const [html, setHtml] = useState("<!-- HTML code here -->");
  const [css, setCss] = useState("/* CSS code here... */");
  const [js, setJs] = useState("// JavaScript code here...");

  useEffect(() => {
    const timeout = setTimeout(() => {
      const previewFrame = document.getElementById("preview");
      const preview =
        previewFrame.contentDocument || previewFrame.contentWindow.document;
      preview.open();
      preview.write(`
            <html>
              <head>
                <style>${css}</style>
              </head>
              <body>${html}</body>
              <script>${js}</script>
            </html>
          `);
      preview.close();
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);
  return (
    <>
    <div className="bg-black text-white min-h-screen py-8 px-4">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 md:pr-4">
          <h2 className="text-xl font-semibold mb-2">HTML</h2>
          <Editor
            height="50vh"
            defaultLanguage="html"
            value={html}
            onChange={(value) => setHtml(value)}
            theme="vs-dark"
          />
        </div>
        <div className="w-full md:w-1/3 md:px-2">
          <h2 className="text-xl font-semibold mb-2">CSS</h2>
          <Editor
            height="50vh"
            defaultLanguage="css"
            value={css}
            onChange={(value) => setCss(value)}
            theme="vs-dark"
          />
        </div>
        <div className="w-full md:w-1/3 md:pl-4">
          <h2 className="text-xl font-semibold mb-2">JavaScript</h2>
          <Editor
            height="50vh"
            defaultLanguage="javascript"
            value={js}
            onChange={(value) => setJs(value)}
            theme="vs-dark"
          />
        </div>
      </div>
      <div className="w-full">
        <h2 className="text-xl font-semibold mb-2">Preview</h2>
        <iframe
          id="preview"
          title="Preview"
          className="w-full h-64 bg-white"
        />
      </div>
    </div>
  </>
  );
}

export default CodeEditor;
