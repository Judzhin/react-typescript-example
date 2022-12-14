import React from "react";

interface ModalProps {
    title: string,
    children: React.ReactNode
}

export default function Modal ({title, children}: ModalProps) {
    return (
        <div className="fixed bg-black/50 top-0 right-0 bottom-0 left-0" >
            <div className="bg-white w-[500px] p-5 rounded absolute top-10 left-1/2 -translate-x-1/2">
                <h1 className="test-2xl text-center mb-2">{title}</h1>
                {children}
            </div>
        </div>
    );
}