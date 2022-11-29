import { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct;
}

// export function Product(props: ProductProps) {
export function Product({ product }: ProductProps) {
  const [detail, setDetail] = useState(false);
  const bttnClassNames: string[] = [
    "py-2", // default
    "px-4", // default
    "border", // default
    detail ? "bg-yellow-400" : "bg-blue-400", // toggle background class color
  ];

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      {/* {props.product.title} */}
      <img src={product.image} alt={product.title} className="w-1/6" />
      <p>{product.title}</p>
      <p className="font-bold">{product.price}</p>

      <button
        // className="py-2 px-4 border bg-yellow-400"
        className={bttnClassNames.join(" ")}
        // onClick={() => setDetail(true)}
        onClick={() => setDetail((prev) => !prev)}
      >
        {/* Show details */}
        {!detail ? "Show detail" : "Hide detail"}
      </button>

      {detail && <p>{product.description}</p>}
    </div>
  );
}
