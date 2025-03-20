import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";

// Configurar el worker de PDF.js para cargar archivos correctamente
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewer = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    return (
        <div className="flex flex-col items-center p-4">
        <Document
            file="/documento.pdf"  // Ruta del PDF en la carpeta public
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        >
            <Page pageNumber={pageNumber} />
        </Document>
        <p className="mt-2">
            Página {pageNumber} de {numPages}
        </p>
        <div className="mt-4">
            <button
            onClick={() => setPageNumber(pageNumber - 1)}
            disabled={pageNumber <= 1}
            className="px-4 py-2 m-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
            Anterior
            </button>
            <button
            onClick={() => setPageNumber(pageNumber + 1)}
            disabled={pageNumber >= numPages}
            className="px-4 py-2 m-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
            Siguiente
            </button>
        </div>
        </div>
    );
};

export default PdfViewer;
