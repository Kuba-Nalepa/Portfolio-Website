import Gallery from "./Gallery";

export default function Project(props:{
    title: string;
    desc: string;
    images: string[];
}) {
    return(
    <div className="w-3/4 flex flex-row items-center mt-24 px-8 bg-slate-300 rounded-xl shadow-md shadow-black border-t-2 border-white">
        <div className="w-1/3 my-8">
            <Gallery images={props.images} />
        </div>

        <div className="w-2/3 px-8">
            <p className="mt-8 text-center text-black text-xl font-bold">{props.title}</p>
            <p className="text-center text-black text-lg">{props.desc} </p>
        </div>
    </div>  
    )
}