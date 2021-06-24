import React, {useState} from 'react'
import {Document, Page} from 'react-pdf'
import myPDF from '../Pages/Resume/Kanchanak_Khat_Resume.pdf'

const MyContext = React.createContext()

const MyProvider = (props) =>{
   
    const [numPages,setNumPages] = useState(null)
    // const [pageNumber, setPageNumber] = useState(1)
    
    const onDocumentLoadSuccess= ({numPages}) =>{
            setNumPages(numPages)
            // setPageNumber(1)
    }
    // const changePage = (offset) => {
    //     setPageNumber(prevPageNumber => prevPageNumber + offset)
    // }
    // const previousPage = () =>{
    //     changePage(-1)
    // }
    // const nextPage = () => {
    //     changePage(1)
    // }

    const pdf = myPDF

    return(
        <>
        <MyContext.Provider value={{
            numPages,
            // pageNumber,
            onLoadSuccess: onDocumentLoadSuccess,
            // nextPage: nextPage,
            // prevPage: previousPage,
            pdf

        }}>

            {props.children}
        </MyContext.Provider>
        </>

    )
}
export {MyContext, MyProvider}