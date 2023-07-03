import React from 'react'
import Card from './Card'

function Cards() {


    return (

        <div className='font-sans'>
            <div className='font-bold mb-4'>New Collection</div>
            <div className='grid xxl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                {/* {items.map((item, index) => (
                    <Card key={index} item={item} />
                ))} */}

            </div>

        </div>
    )
}

export default Cards