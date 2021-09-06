import React, { useState } from 'react';
import { Document, pdfjs, Page } from 'react-pdf'
import Loading from '../../components/Auth/Loading'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Codex = () => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  }

  const getPages = () => {
    const pages = []
    for (let i = 1; i < numPages + 1; i++) {
      pages.push(
        <Page
          pageNumber={i}
          key={i}
          width={window.innerWidth}
          loading={null}
        />
      )
    }
    return pages
  }

  return (
    <div>
      <Document file={process.env.PUBLIC_URL + '/codex/Codice1.pdf'}
        onLoadSuccess={onDocumentLoadSuccess}
        renderMode='svg'
        loading={Loading}
      >
        {getPages()}
      </Document>
    </div>
  )
};

export default Codex;
