import React from "react";

interface ErrorMessageProps {
    error: string
}

// export default function ErrorMessage (props: any) {
export default function ErrorMessage (props: ErrorMessageProps) {
    return (
        <div className='text-center text-red-600'>{props.error}</div>
    );
}