import Image from "next/image";
import React from "react";



const Note = ({data}) => {

    return (
        <div className="w-full flex flex-col gap-5">
            <h1 className="font-semibold text-2xl"> Title: {data?.title}</h1>

            <div className="relative h-[60vh] w-[100%]">
                <Image src={data?.image} className="object-contain" fill="true" alt={`${data?.title} image`}/>
            </div>
            
            <div className="mt-5">
                <p className="md:text-[18px]"> {data?.content} </p>
            </div>

        </div>
    )
}

export default Note;