import React, {ChangeEvent, useState} from "react";

export default function CreateProduct() {

    const [title, setTitle] = useState('');

    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault()
    }

    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    return (
        <form action="" onSubmit={onSubmitHandler}>
            <input
                type="text"
                className="border py-2 px-4 mb-2 w-full outline-0"
                placeholder='Enter product title...'
                value={title}
                // onChange={(e) => {
                //     setTitle(e.target.value)
                // }}
                onChange={onChangeTitleHandler}
            />
            <button type="submit" className="py-2 px-4 border bg-yellow-400">Create</button>
        </form>
    );
}