import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"


export default function Gallery(props: {images: string[]}) {
    const [index, setIndex] = useState<number>(0);

    function changeImage(toRight: boolean) {
        if(toRight) {
            if(index < (props.images.length - 1)) {
                setIndex(index + 1)
            } else {
                setIndex(0)
            }
            
        } else {
            if(index > 0) {
                setIndex(index - 1)
            } else {
                setIndex(props.images.length - 1)
            }
        }
    }
    return(
        <div>    
            <div className="  relative border border-white/40 rounded shadow-main overflow-hidden group">
                <img className=" h-full w-full object-contain py-6 px-12" src={props.images[index]}/>
                <button onClick={() => changeImage(false)} className="h-full p-2 absolute top-0 left-0 md:-left-8 bg-gradient-to-r from-black/75 flex items-center md:group-hover:left-0 transition-all duration-300 ease-out">
                <FontAwesomeIcon icon={faArrowLeft} className="w-[20px]"/>
                </button>

                <button onClick={() => changeImage(true)} className="h-full p-2 absolute top-0 right-0 md:-right-8 bg-gradient-to-l from-black/75 flex items-center md:group-hover:right-0 transition-all duration-300 ease-out">
                <FontAwesomeIcon icon={faArrowRight} className="w-[20px]" />
                </button>
            </div>
        </div>

    )
}