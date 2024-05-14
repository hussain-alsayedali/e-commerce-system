
export default function Content() {
    return (
        <>
        <div className="bg-gray-100 py-4 px-9 rounded-md mb-40">
            <div className="flex space-x-8">
                <img className="h-40 rounded-md" src="src/assets/phone.png" alt="" />
            <div className="">
                <p className="text-lg font-semibold">Mobile Phone</p>
                <div className="flex ml-5 mb-2.5">
                <p className="text-gray-500 mr-2 items-center font-semibold font">2000SR</p>
                
             

                </div>

                <div className="border border-gray-500 rounded-md py-2 px-3 flex justify-between">
    <div className="h-8 w-8 bg-purple-900 text-center rounded-md flex items-center justify-center text-white ">-</div>
    <p>1</p>
    <div className="h-8 w-8 bg-purple-800 text-center rounded-md flex items-center justify-center text-white">+</div>
</div>
                
            </div>
            </div>
            <div className="flex space-x-8 mt-8">
                <img className="h-40 rounded-md" src="src/assets/phone.png" alt="" />
            <div className="">
                <p className="text-lg font-semibold">Mobile Phone</p>
                <div className="flex ml-5 mb-2.5">
                <p className="text-gray-500 mr-2 items-center font-semibold font">2000SR</p>
                

                </div>
       
                <div className="border border-gray-500 rounded-md py-2 px-3 flex justify-between">
    <div className="h-8 w-8 bg-purple-800 text-center rounded-md flex items-center justify-center text-white ">-</div>
    <p>1</p>
    <div className="h-8 w-8 bg-purple-900 text-center rounded-md flex items-center justify-center text-white ">+</div>



                </div>
                
            </div>
            </div>
            <br />
            <div className="flex justify-between">
                <p className="font-semibold">Shipping fee</p>
                <p className="font-semibold">20SR</p>
            </div>
            <hr className="border-gray-300 m-2" />
            <br></br>
            <div className="flex justify-between">
                <p className="font-semibold">Total</p>
                <p className="font-semibold">4080SR</p>
            </div>
            <hr className="border-gray-300 m-2" />
            <br></br>
            <button className="bg-purple-800  text-white py-1 px-20 text-lg rounded-lg items-center  ml-3">Checkout</button>
            </div>
            </>
    )
}
