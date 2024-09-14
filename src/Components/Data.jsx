//import { itemData } from "../util/data.js"
import { useQuery } from "@tanstack/react-query"
import {  handleSelectImage} from "../util/http.js"
import ImagePicker from "../UI/ImagesPicker.jsx"


const DataItem = () => {
    const classes = " text-zinc-500 font-bold bg-gray-900 px-2 py-1 rounded-md uppercase hover:bg-slate-950 hover:text-stone-400"
    const {data, isLoading, isError} = useQuery({
        queryKey: ['getUsers-data'],
        queryFn:  handleSelectImage
        
    })

    console.log(`Fetching the ${data}?`)

    let content;

    if(isLoading){
        content =  <p className=" text-center font-extrabold text-2xl text-gray-600">Fetching Student Data....</p>
    }

    if(isError){
        content =  <h1 className=" text-center text-5xl font-bold text text-gray-600">AN ERROR OCCURED</h1>
    }
    
    return(
        <>
            <header className=" flex justify-center items-center text-white flex-col my-9 font-mono">
                <h1 className=" text-6xl font-bold mb-4 text-stone-500">Student Profile</h1>
                <p className=" text-zinc-500 font-semibold text-lg">
                    Click on the <span className=" text-green-700 font-bold">student's image</span> to view detailed information, 
                </p>
                <p className=" text-zinc-500 font-semibold text-lg">
                    including their name, age, and other <span className=" text-orange-500 font-bold">relevant data.</span>
                </p>
            </header>

            <main className=" mx-10 ">
               <ImagePicker data={data} content={content} className={classes} />
            </main>
        
        </>
    )
}

export default DataItem