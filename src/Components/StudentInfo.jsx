import { itemData } from "../util/data"
import { Link, useParams } from "react-router-dom"
import { useState , useEffect} from "react"
import Accordion from "./Accordion/Accordion"
import AccordionItem from "./Accordion/AccordionItem"
const StudentInfo = () => {

    const [isData, setIsData] = useState(null)
    const {id} = useParams()


    useEffect(() => {
        const fetchData = itemData.find((prevItem) => prevItem.id === id)
        setIsData(fetchData)
    },[id])

    if(!isData){
       return<p>AN ERROR</p>
    }



    const classes = " mt-2 bg-neutral-900 text-stone-400 px-2 py-1 uppercase font-bold rounded hover:bg-slate-900 hover:text-slate-300"
    return(
        <main className=" flex justify-center items-center h-screen ">
           <div className=" bg-neutral-600 px-3 py-2 rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">                   
                <div  className=" flex items-center justify-center ">
                    <img src={isData.img} alt={isData.name} className=" w-[15rem] rounded shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]" />
                    <div className=" flex justify-center items-center flex-col px-5 py-6">
                        <div className=" bg-stone-700 text-gray-950 px-3 py-2 rounded-md my-3 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                            <h1 className=" text-xl font-bold my-2">Name: {isData.name}</h1>
                            <p  className=" text-xl font-bold my-2">Age: {isData.age}</p>
                            <p  className=" text-xl font-bold my-2">Gender: {isData.sex}</p>
                            <p className=" text-xl font-bold my-2">Birthday: {isData.birthday}</p>             
                            <p className=" text-xl font-bold my-2">Address: {isData.address}</p>
                        </div>

                        <section className="">
                            <Accordion  className= "accordion">
                                <AccordionItem id="local-info"  title="Interesting about me">
                                    <article >
                                        <h1 className=" text-zinc-950 text-lg font-bold text-center  ">{isData.aboutMe}</h1>
                                    </article>
                                </AccordionItem>
                            </Accordion>
                        </section>
                        <Link to='..' className={classes} >
                            Back to Main Page
                        </Link>
                    </div>
                </div>
           </div>
        </main>
    )
}

export default StudentInfo