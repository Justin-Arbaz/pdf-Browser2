import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

import { GlobalWorkerOptions } from "pdfjs-dist";
GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js`;

const ReaderView = ({ pdf, onBack }) => {
  return (
    <div>
      <button
        className="mb-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        onClick={onBack}
      >
        Back to List
      </button>
      <div style={{ height: "750px", border: "1px solid #ccc" }}>
        <Worker workerUrl={GlobalWorkerOptions.workerSrc}>
          <Viewer fileUrl={pdf.url} />
        </Worker>
      </div>
    </div>
  );
};

export default ReaderView;
