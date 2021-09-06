import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Document, pdfjs, Page } from 'react-pdf'
import Loading from '../../components/Auth/Loading'
import { fetchCodex } from '../../api/fetchCodex'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Codex = () => {
  const { id } = useParams()
  const [numPages, setNumPages] = useState(null);
  const [codexInfo, setCodexInfo] = useState({});

  useEffect(() => {
    fetchCodex(id).then((data) => {
      setCodexInfo(data)
    })
  }, [id]);

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

  const renderCodexInfo = () => {
    if (!codexInfo.id) {
      return
    }
    return (
      <div className='container'>
        <h2 className='font-weight-bold'>{codexInfo.name}</h2>
        <p>Páginas: {codexInfo.pages}</p>
        <p>Ubication: {codexInfo.location}</p>
        <p>Material: {codexInfo.material}</p>
      </div>
    )
  }

  return (
    <div>
      {renderCodexInfo()}
      <Document file={`${process.env.PUBLIC_URL}/codex/Codice${id}.pdf`}
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
