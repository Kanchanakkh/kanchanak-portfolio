import React,{useContext} from 'react'
import {MyContext} from '../../Context/index'
import {Document, Page,  pdfjs} from 'react-pdf'
import './resume.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Resume = () => {
    
    const context = useContext(MyContext);

    return (
        <>
            <div>
            <h2 > Kanchanak's Resume </h2>
            

            </div>
            <div className="all-page-container">
            <Document file={context.pdf}
            onLoadSuccess={context.onLoadSuccess}
            
            >
                {Array.from(new Array(context.numPages), (el, index) => (
                    <Page key={`page_${index+1}`} pageNumber={index+1}/>
                ))}
            </Document>
            </div>
        </>
    )
}

export default Resume
