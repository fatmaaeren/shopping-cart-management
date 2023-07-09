import React, { useEffect } from 'react'
import Card from './Card'
import { useDispatch, useSelector } from "react-redux"


function Cards() {

    const { products, loading, error } = useSelector(state => state.products);

    return (

        <div className='font-sans'>

            {!loading ? (
                <div className='text-center h-screen text-slate-500 flex justify-center items-center'>
                    <div>Loading..</div>
                </div>
            ) : error ? (
                <div>Error</div>
            ) : (
                <div className='text-left'>
                    <div className='text-lg text-slate-600 mt-4 mb-8'>New Collection</div>
                    <div className='grid xxl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                        {products?.map((item, index) => (
                            <Card key={index} item={item} />
                        ))}

                    </div>
                </div>
            )}

        </div>
    )
}

export default Cards