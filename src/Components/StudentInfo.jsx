import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchStudentData } from "../util/http";
import Accordion from "./Accordion/Accordion";
import AccordionItem from "./Accordion/AccordionItem";

const StudentInfo = () => {
    const { id } = useParams();

    const { data: isData, isLoading, isError } = useQuery({
        queryKey: ['getUsers-data'],
        queryFn: ({ signal }) => fetchStudentData({ id, signal }),
    });

    let content;

    if (isLoading) {
        content = <p className="text-center font-extrabold text-xl md:text-2xl text-gray-600">Fetching Student Data....</p>;
    }

    if (isError) {
        content = <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600">AN ERROR OCCURRED</h1>;
    }

    const classes = "mt-4 bg-neutral-900 text-stone-400 px-4 py-2 uppercase font-bold rounded hover:bg-slate-900 hover:text-slate-300";

    return (
        <main className="flex flex-col items-center min-h-screen py-6 px-4 sm:px-6 md:px-8 lg:px-12">
            {content}
            {isData && (
                <div className="bg-neutral-600 max-w-md w-full px-4 py-6 rounded-lg shadow-md">
                    <div className="flex flex-col items-center">
                        {/* Uncomment if image data is available */}
                        {/* <img src={isData.img} alt={isData.name} className="w-full max-w-xs rounded-md shadow-lg mb-4" /> */}
                        <div className="bg-stone-700 text-gray-950 w-full px-4 py-4 rounded-md shadow-md mb-4">
                            <h1 className="text-xl md:text-2xl font-bold mb-2">Name: {isData.name}</h1>
                            <p className="text-lg md:text-xl font-semibold mb-2">Age: {isData.age}</p>
                            <p className="text-lg md:text-xl font-semibold mb-2">Gender: {isData.gender}</p>
                            <p className="text-lg md:text-xl font-semibold mb-2">Birthday: {isData.birthday}</p>
                            <p className="text-lg md:text-xl font-semibold mb-2">Address: {isData.address}</p>
                        </div>

                        <section className="w-full mb-4">
                            <Accordion className="accordion">
                                <AccordionItem id="local-info" title="Interesting about me">
                                    <article>
                                        <h1 className="text-zinc-950 text-lg md:text-xl font-bold text-center">{isData.description}</h1>
                                    </article>
                                </AccordionItem>
                            </Accordion>
                        </section>
                        <Link to='..' className={classes}>
                            Back to Main Page
                        </Link>
                    </div>
                </div>
            )}
        </main>
    );
};

export default StudentInfo;
