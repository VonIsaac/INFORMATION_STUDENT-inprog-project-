//import { itemData } from "../util/data.js"
import { useQuery } from "@tanstack/react-query"
import {  handleSelectImage} from "../util/http.js"
import ImagePicker from "../UI/ImagesPicker.jsx"

const DataItem = () => {
    const classes = " text-zinc-500 font-bold bg-gray-900 px-2 py-1 rounded-md uppercase hover:bg-slate-950 hover:text-stone-400"
    const {data, isLoading, isError} = useQuery({
        queryKey: ['getUsers-data'],
        queryFn: handleSelectImage
    })


   

    let content;

    if(isLoading){
        content =  <p className=" text-center font-extrabold text-2xl text-gray-600">Fetching Student Data....</p>
    }

    if(isError){
        content =  <h1 className=" text-center text-5xl font-bold text text-gray-600">AN ERROR OCCURED</h1>
    }

    console.log(`Fetching the ${data}?`)
    
    return(
        <>
           <header className="flex flex-col items-center text-white my-9 px-9 md:px-8 lg:px-12 text-center">
    <h1 className="text-xl md:text-4xl lg:text-6xl font-bold mb-4 text-stone-500 text-center">
        Student Profile
    </h1>
    <p className="text-zinc-500 font-semibold text-base md:text-lg text-center mb-2">
        Click on the <span className="text-green-700 font-bold">student's image</span> to view detailed information,
    </p>
    <p className="text-zinc-500 font-semibold text-base md:text-lg text-center">
        including their name, age, and other <span className="text-orange-500 font-bold">relevant data.</span>
    </p>
</header>


            <main className=" mx-10 ">
               <ImagePicker data={data} content={content} className={classes} />
            </main>
        
        </>
    )
}

export default DataItem