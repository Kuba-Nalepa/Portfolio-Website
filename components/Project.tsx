import Gallery from "./Gallery";

export default function Project(props:{
    title: string;
    desc: string;
    images: string[];
}) {
    return(
    <div className=" w-10/12 flex flex-col items-center mt-24 px-2 py-8 bg-slate-300 rounded-xl shadow-md shadow-black border-t-2 border-white md:w-3/4 md:flex-row">
        <div className=" flex justify-center my-8 md:w-1/3">
            <Gallery images={props.images} />
        </div>

        <div className="md:w-2/3 md:px-8">
            <p className="mt-2 pb-4 text-center text-black text-4xl font-bold ">{props.title}</p>
            <p className="text-center text-black text-lg">{props.desc} </p>
        </div>
    </div>  
    )
}