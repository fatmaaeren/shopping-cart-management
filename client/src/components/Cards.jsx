import React, { useEffect } from 'react'
import Card from './Card'
import { useDispatch, useSelector } from "react-redux"


function Cards() {

    const { products } = useSelector(state => state.products);

    return (

        <div className='font-sans'>
            <div className='font-bold mb-4'>New Collection</div>
            <div className='grid xxl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                {products?.map((item, index) => (
                    <Card key={index} item={item} />
                ))}

            </div>

        </div>
    )
}

export default Cards