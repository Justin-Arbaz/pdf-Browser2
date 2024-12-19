import React from "react";

const ListView = ({ pdfs, onSelect }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {pdfs.map((pdf) => (
        <div
          key={pdf.id}
          className="cursor-pointer bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-200 transition"
          onClick={() => onSelect(pdf)}
        >
          <img
            src={pdf.thumbnail}
            alt={pdf.title}
            className="h-40 w-full object-cover rounded-lg"
          />
          <h3 className="mt-3 font-semibold text-lg text-gray-800 truncate">
            {pdf.title}
          </h3>
          <p className="text-sm text-gray-500">By {pdf.author}</p>
        </div>
      ))}
    </div>
  );
};

export default ListView;
