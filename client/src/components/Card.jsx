function Card({ item }) {

    return (
        <div className='w-full '>
            <div className='relative group overflow-hidden flex justify-center'>
                <img src={item.img} alt="" />
                <div className='absolute w-full h-full bg-transparent flex items-end justify-center -bottom-10  group-hover:bottom-5 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500 '>
                    <div className='bg-stone-50 flex flex-col justify-center w-5/6 p-6 transition-all ease-in-out duration-500' >

                        <div className="flex justify-center">
                            <button className="bg-black text-sm py-2 px-4 text-slate-200 w-full" onClick={handleAdd} >Add To Cart</button>

                        </div>

                    </div>
                </div>
            </div>

            <div className='flex justify-between mt-4'>
                <div>
                    <div className='text-sm font-bold'>${item.price}</div>
                    <div className='text-sm'>{item.name}</div>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 256 256"><path fill="currentColor" d="M178 32c-20.65 0-38.73 8.88-50 23.89C116.73 40.88 98.65 32 78 32a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 220.66 240 164 240 94a62.07 62.07 0 0 0-62-62Zm-50 174.8C109.74 196.16 32 147.69 32 94a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8Z"></path></svg>
                </div>
            </div>

        </div>
    )
}

export default Card