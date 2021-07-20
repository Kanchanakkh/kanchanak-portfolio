import React,{useContext} from 'react'
import {MyContext} from '../../Context/index'
import {Document, Page,  pdfjs} from 'react-pdf'
import './resume.css'
import Projects from './projects'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Resume = () => {
    
    const context = useContext(MyContext);

    return (
        <>
            <div>
                <h2 > Kanchanak's Resume </h2>
            
                <div className="all-page-container">
                    <Document file={context.pdf} onLoadSuccess={context.onLoadSuccess}>
                        {Array.from(new Array(context.numPages), (el, index) => (
                            <Page key={`page_${index+1}`} pageNumber={index+1}/>
                        ))}
                    </Document>
                </div>
                <div>
                    <p style={{textAlign: 'center',display:'flex', justifyContent:'center'}}><strong>🚨🚨 Note: Some of the info on my resume is omitted. 🚨🚨</strong> </p>
                </div>

                <h4><u>My technical skill levels</u></h4> 
                    <div className='list-style'>
                        <ul>1. Know nothing about it</ul>
                
                        <ul>2. Get exposed to it and only have learned the basics</ul>
                        <ul>3. Still learning its fundamental concept and have practiced using for a short period of time
                            <li><strong>👉 Python</strong></li>
                            <li><strong>👉 CSS</strong></li>
                            <li><strong>👉 SQL</strong></li>
                        </ul>
                        <ul>4. Use it from time to time or apply it to projects or has taken a class for it, remember a lot of its syntax and rules 
                            <li><strong>👉 Java</strong></li>
                            <li><strong>👉 HTML</strong></li>
                            <li><strong>👉 PHP</strong></li>
                            <li><strong>👉 JavaScript</strong></li>
                            <li><strong>👉 React.js</strong></li>
                        </ul>
                        <ul>5. Expert level</ul>

                    </div>
                    <div>
                        <Projects />
                    </div>
                </div>
        </>
    )
}

export default Resume
