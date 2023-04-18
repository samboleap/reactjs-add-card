import React from "react"
import Button from "./Button"

const Card = ({ product }) => {
    return (
        <div className='col-md-4 col-lg-3 col-sm-6'>
            <div className='card w-100 shadow-md  rounded-lg'>
                <img
                    className='rounded-t-lg'
                    src={product.images}
                    width={287}
                    alt='product_image'
                />
                <h4 className='p-3 font-bold truncate'>{product.title}</h4>
                <div className='px-3  '>${product.price}</div>
                <p className='px-3 opacity-80 line-clamp-3'>{product.description}</p>
                <small className='p-3 opacity-60'>{product.creationAt}</small>
                <div className='btn-group space-x-3 m-3 relative bottom-0'>
                    <Button
                        title={"Buy now"}
                        btnStyle={"py-2 px-3 bg-green-400 rounded-lg "}
                    />
                    <Button
                        title={"add to card"}
                        btnStyle={"py-2 px-3 border rounded-lg border-green-400"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Card;