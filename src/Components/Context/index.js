import React, {useState} from 'react'
import myPDF from '../Pages/Resume/Kanchanak_Khat_Resume.pdf'

const MyContext = React.createContext()

const MyProvider = (props) =>{
   
    const [numPages,setNumPages] = useState(null)
    
    const onDocumentLoadSuccess= ({numPages}) =>{
            setNumPages(numPages)
            
    }
    
    const pdf = myPDF

    return(
        <>
        <MyContext.Provider value={{
            numPages,
            onLoadSuccess: onDocumentLoadSuccess,     
            pdf

        }}>

            {props.children}
        </MyContext.Provider>
        </>

    )
}
export {MyContext, MyProvider}