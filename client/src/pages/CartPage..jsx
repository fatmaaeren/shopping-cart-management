import CartItem from '../components/CartItem';

function CartPage() {


    return (
        <div className='lg:px-8 px-4 lg:py-6 py-3 absolute top-[100px] w-full'>

            <div className='flex flex-col lg:flex-row w-full'>

                <div className='lg:basis-3/4 sm:basis-1 mb-6'>
                    <div className='text-slate-700 font-bold border-b-2'>Items</div>
                    {cart.map((data, index) => (
                        <CartItem data={data} key={index} />
                    ))}
                </div>
                <div className='lg:basis-1/4 sm:basis-1'>
                    <div className='text-slate-700 font-bold border-b-2 mb-4'>Summary</div>
                    <div className='text-slate-500 text-sm font-bold'>Total Quantity:</div>
                    <hr className='mb-4' />
                    <div className='font-bold text-black text-sm mb-8'> {totalQuantity}  Items</div>
                    <div className='text-slate-500 text-sm font-bold'>Total Price:</div>
                    <hr className='mb-4' />
                    <div className='font-bold text-black text-sm mb-8'> ${totalPrice}</div>
                </div>

            </div>

        </div>
    )
}

export default CartPage