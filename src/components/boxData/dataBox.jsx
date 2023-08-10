'use client'
import React, { Fragment, useState} from "react";
import 'tailwindcss/tailwind.css';
import Modal from "../modal/modal";

export default function DataBox ({ title, price, images }) {
    const [showModal, setShowModal] = useState(false);
    return (
        <Fragment>
            <div className="h-320 rounded-8 bg-boxData">
                <div className="p-3">
                    <img src={images} alt={title} className="h-40 rounded-lg w-full"/>
                    {/* <Image width={246} height={160} alt={title} src={images}/> */}

                    <div className="pt-2 pb-10">
                        <p className="text-lg font-normal text-white ">{title}</p>
                        <p className="text-sm font-normal text-white">Rp. {price}</p>
                    </div>

                    <div className="flex justify-between">
                        <button className="flex items-center justify-center bg-white border w-full mr-3 h-38 border-buttRemove rounded-8 text-buttRemove hover:bg-hovRed hover:text-white"
                        onClick={() =>
                            setShowModal(true)}>Remove</button>
                        <button className="flex items-center justify-center bg-white border w-full h-38  border-buttEdit rounded-8 text-buttEdit hover:bg-hovEdit hover:text-white">Edit</button>
                    </div>
                </div>
            </div>
            <Modal title={title} isVisible={showModal} onClose={() => 
            setShowModal(false)}/>
        </Fragment>
    )
}
