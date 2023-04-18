import React, { useEffect, useState } from "react"
import Card from "./components/Card"

export default function Products() {
  const [product, setProduct] = useState([{}])
  useEffect(() => {
    const fetchData = async () => {
      const data = await (
        await fetch("https://api.escuelajs.co/api/v1/products")
      ).json()
      setProduct(data)
    }
    fetchData()
  }, [])
  return (
    <div className='w-10/12 mx-auto'>
      <h1 className='text-center text-[25px] my-5 '> <span className="text-green-700 font-bold">Welcome to</span> Data Analytics Class</h1>

      <div className='container flex flex-wrap gap-3 justify-center'>
        <div className='row w-70 m-4'>
          {product.map((p, index) => (
            <Card product={p} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}