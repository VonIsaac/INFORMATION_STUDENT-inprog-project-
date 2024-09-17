import { Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"

const ImagePicker = ({data, content, className}) => {
    if (!data){
        return;
    }
    
    console.log("this is th data", data);


    return(
        <ul className=" grid grid-rows-4 grid-flow-col gap-5 ">
        {/* mapping all data */}
        {content}
        {data && (
    <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.combinedData?.map((datas) => (
            <li
                key={datas.path}
                className="flex flex-col items-center p-4 bg-stone-800 rounded-md shadow-md transition-transform transform hover:scale-105"
            >
                <img
                    src={`http://localhost:8000/${datas.path}`}
                    alt={datas.caption}
                    className="w-full max-w-xs rounded-md mb-4"
                />
                <h1 className="text-center text-stone-500 font-bold text-lg md:text-xl mb-2">{datas.caption}</h1>
                <div className="flex justify-center">
                    <Link
                        className={className}
                        to={`/getUsers/${datas.userId}`}
                    >
                        View Details
                    </Link>
                </div>
            </li>
        ))}
    </ul>
)}

    </ul>
    )
}

export default ImagePicker