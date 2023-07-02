
function CartItem({ data }) {


    return (
        <div className='flex border-b-2 py-4 gap-6'>

            <img className='w-24' src={data.item.img} alt="" />

            <div className='w-full flex flex-col justify-between'>
                <div>
                    <div className='text-sm text-slate-700 mb-1'>{data.item.name}</div>
                    <div className='text-sm font-bold mb-'>$   {data.item.price}</div>
                    <div className='text-slate-500 font-light text-xs mt-2'>Size: Standard</div>
                </div>

                <div className='flex gap-2 justify-between items-center'>
                    <div className='flex items-center'>
                        <button className='text-slate-700 text-xl py-1 px-2'>-</button>
                        <div className='text-slate-700 text-sm flex items-center mx-4 bg-gray-200 py-1 px-2 rounded'>{data.item.quantity}</div>
                        <button className='text-slate-700 text-xl py-1 px-2' onClick={(e) => handleDecrase(e)}>+</button>
                    </div>
                    <div>
                        <button className='text-slate-900 py-1 px-2 flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" d="M20.5 6h-17m15.333 2.5l-.46 6.9c-.177 2.654-.265 3.981-1.13 4.79c-.865.81-2.195.81-4.856.81h-.774c-2.66 0-3.99 0-4.856-.81c-.865-.809-.953-2.136-1.13-4.79l-.46-6.9"></path><path d="M6.5 6h.11a2 2 0 0 0 1.83-1.32l.034-.103l.097-.291c.083-.249.125-.373.18-.479a1.5 1.5 0 0 1 1.094-.788C9.962 3 10.093 3 10.355 3h3.29c.262 0 .393 0 .51.019a1.5 1.5 0 0 1 1.094.788c.055.106.097.23.18.479l.097.291A2 2 0 0 0 17.5 6" opacity=".5"></path></g></svg>
                        </button>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default CartItem