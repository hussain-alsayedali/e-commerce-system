import { useState } from 'react';

function ProductForm() {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImage, setProductImage] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Logic to handle product submission goes here
    //     console.log({ productName, productPrice, productImage });
    // };

    return (
        <div className="min-h-screen flex items-center justify-center bg-purple-50">
            <form className="w-full max-w-lg p-8 space-y-8 bg-white rounded-lg shadow-lg" >
                <h2 className="text-2xl font-bold text-purple-700">Add a New Product</h2>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block text-purple-900 text-sm font-bold mb-2" htmlFor="product-name">
                            Product Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-purple-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="product-name" type="text" placeholder="Enter product name" value={productName} onChange={(e) => setProductName(e.target.value)} />
                    </div>
                    <div className="w-full px-3">
                        <label className="block text-purple-900 text-sm font-bold mb-2" htmlFor="product-price">
                            Price
                        </label>
                        <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-purple-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="product-price" type="number" placeholder="Enter price" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
                    </div>
                    <div className="w-full px-3">
                        <label className="block text-purple-900 text-sm font-bold mb-2" htmlFor="product-image">
                            Product Image URL
                        </label>
                        <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-purple-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="product-image" type="url" placeholder="Enter image URL" value={productImage} onChange={(e) => setProductImage(e.target.value)} />
                    </div>
                    <div className="w-full px-3">
                        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Add Product
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ProductForm;
