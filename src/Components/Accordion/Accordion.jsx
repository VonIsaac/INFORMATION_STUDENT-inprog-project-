
import { createContext, useContext, useState } from "react"

   const  AccordionContex = createContext()


   // use costume hook to accest the logic
   export function useAccordionContext(){
        const ctx = useContext(AccordionContex)
        if(!ctx){
            throw new Error("AN ERROR OCURED")
        }

        return ctx
   }


const Accordion = ({children, className}) => {

    const [isAccordion, setIsAccordion] = useState()


    // a away to open and close the accordion
    function toggleContext(id){
        setIsAccordion( prevOpenId => prevOpenId === id ? null: id)
    }

    // stored in object variable and then pass it in value in AccordionContex
    const contexValue = {
        toggleContext,
        isAccordion
    }

    return(
        <AccordionContex.Provider value={contexValue}>
            <ul className={className}>
                {children}
            </ul>
        </AccordionContex.Provider>
    )
}

export default Accordion