import { itemData } from "../util/data.js"
import { Link } from "react-router-dom"


const DataItem = () => {
    const classes = " text-zinc-500 font-bold bg-gray-900 px-2 py-1 rounded-md uppercase hover:bg-slate-950 hover:text-stone-400"
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
                <ul className=" grid grid-rows-4 grid-flow-col gap-5 ">
                    {/* mapping all data */}
                    {itemData.map((data,index) => (
                        <li key={data.id} className=" flex justify-center items-center my-3 p-3 mx-[10rem] bg-stone-800 w-[30rem] h-[25rem] rounded-md">
                            <div >
                                <img src={data.img} alt={data.name} className=" w-[15rem] rounded" />
                                 <h1 className=" my-4 text-center text-stone-500 font-bold text-xl">{data.name}</h1>
                                <div className=" flex justify-center items-center">
                                    <Link to={`/info/${data.id}`} className={classes}>
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </main>
        
        </>
    )
}

export default DataItem