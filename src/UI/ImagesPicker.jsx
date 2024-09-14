import { Link } from "react-router-dom"

const ImagePicker = ({data, content, className}) => {
    return(
        <ul className=" grid grid-rows-4 grid-flow-col gap-5 ">
        {/* mapping all data */}
        {content}
        {data && (
            <>
            {data.map((datas) => (
                <li key={datas.path} className=" flex justify-center items-center my-3 p-3 mx-[10rem] bg-stone-800 w-[30rem] h-[25rem] rounded-md">
                    <div >
                        <img src={`http://localhost:8000/${datas.path}`} alt={datas.caption} className=" w-[15rem] rounded" />
                         <h1 className=" my-4 text-center text-stone-500 font-bold text-xl">{datas.caption}</h1>
                        <div className=" flex justify-center items-center">
                            <Link  className={className}>
                                View Details
                            </Link>
                        </div>
                    </div>
                </li>
            ))}
            
            </>
        )}
    </ul>
    )
}

export default ImagePicker