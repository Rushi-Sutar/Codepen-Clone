import { Editor } from "@monaco-editor/react";
import React, { useEffect, useState } from "react";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

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
      <div className="bg-black text-[#ddd] min-h-screen py-4 px-8">
        <div className="flex flex-col gap-5 md:flex-row md:gap-0 ">
          <div className="w-full md:w-1/3">
            <div className="flex items-center bg-[#1E1E1E] rounded-sm">
              <FaHtml5 className="text-xl mr-2 ml-4 my-4 fill-orange-400" />
              <h2 className="text-xl font-semibold mb-2 items-center">HTML</h2>
            </div>

            <Editor
              height="50vh"
              defaultLanguage="html"
              value={html}
              onChange={(value) => setHtml(value)}
              theme="vs-dark"
            />
          </div>
          <div className="w-full md:w-1/3 md:px-2">
            <div className="flex items-center  bg-[#1E1E1E] rounded-sm">
              <FaCss3Alt className="text-xl mr-2 ml-4 my-4 fill-cyan-400" />
              <h2 className="text-xl font-semibold mb-2 items-center">CSS</h2>
            </div>
            <Editor
              height="50vh"
              defaultLanguage="css"
              value={css}
              onChange={(value) => setCss(value)}
              theme="vs-dark"
            />
          </div>
          <div className="w-full md:w-1/3">
            <div className="flex items-center bg-[#1E1E1E] rounded-sm">
              <IoLogoJavascript className="text-xl mr-2 ml-4 my-4 fill-yellow-400" />
              <h2 className="text-xl font-semibold mb-2 items-center">
                JavaScript
              </h2>
            </div>
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
          <div className="w-full h-[1px] bg-gray-600 mb-2"></div>
          <iframe
            id="preview"
            title="Preview"
            className="w-full h-screen bg-white rounded-md"
            style={{ resize: "vertical" }}
          />
        </div>
      </div>
    </>
  );
}

export default CodeEditor;
