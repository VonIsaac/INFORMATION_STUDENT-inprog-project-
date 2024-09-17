import { Link } from "react-router-dom"


const FrontPage = () => {
    return(
        <>
            <main className=" text-white flex justify-center items-center flex-col h-screen font-mono">
               <h1 className=" text-6xl font-bold my-3 text-stone-500">Welcome to our Student Information</h1> 
               <p className=" text-xl my-2 font-semibold text-stone-400">You can see all the student information by clicking the button below</p>  
               <Link to="/getUsers" className=" bg-zinc-800 uppercase px-2 py-1 rounded-md font-semibold">
                    Click
               </Link>  
            </main>
        
        </>
    )
}

export default FrontPage