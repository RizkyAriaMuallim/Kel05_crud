import Image from "next/image";

export default function DataBox ({ title, price, images }) {
    return (
        <div className="h-320 w-270 rounded-8 bg-boxData">
            <div className="p-3">
                <img src={images} alt={title} className=" w-60 h-40 rounded-lg"/>
                {/* <Image width={246} height={160} alt={title} src={images}/> */}

                <div className="pt-2 pb-10">
                    <p className=" text-white text-lg font-normal">{title}</p>
                    <p className="text-white text-sm font-normal">Rp. {price}</p>
                </div>

                <div className="flex justify-between">
                    <div className="flex justify-center items-center w-117 h-38 bg-white border border-buttRemove rounded-8 text-buttRemove">Remove</div>
                    <div className="flex justify-center items-center w-117 h-38 bg-white border border-buttEdit rounded-8 text-buttEdit">Edit</div>
                </div>
            </div>
        </div>
    )
}