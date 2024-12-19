import React, { useState } from "react";
import ListView from "./components/ListView";
import ReaderView from "./components/ReaderView";
import SearchBar from "./components/SearchBar";
import { pdfData } from "./mockData";
import "./index.css";

const App = () => {
  const [filteredPdfs, setFilteredPdfs] = useState(pdfData);
  const [selectedPdf, setSelectedPdf] = useState(null);

  const handleSearch = (query) => {
    const result = pdfData.filter((pdf) =>
      pdf.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPdfs(result);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto p-4">
        <header className="bg-indigo-600 text-white text-center py-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold">PDF Browser</h1>
          <p className="text-sm">Browse and view your PDFs with ease</p>
        </header>
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <SearchBar onSearch={handleSearch} />
          {!selectedPdf ? (
            <ListView pdfs={filteredPdfs} onSelect={setSelectedPdf} />
          ) : (
            <ReaderView pdf={selectedPdf} onBack={() => setSelectedPdf(null)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
