
function CouponCode(className) {
  return (
    <div className={`${className} w-full border border-gray-300 justify-center items-center py-10`}>
    <div className='w-full flex flex-col px-10'>
    <label className='text-[#6A6A6A]'>Enter your coupon code if you have one</label>
    <div className='mt-5 flex gap-2'>
        <input type='text' className='border border-gray-500 py-2 px-2 w-1/2 rounded-md' placeholder='Coupon Code'/>
        <button className='px-6 py-[-10px]  rounded-md bg-[#6A6A6A] font-semibold text-white'>Apply</button>
    </div>

    </div>
      
    </div>
  )
}

export default CouponCode
