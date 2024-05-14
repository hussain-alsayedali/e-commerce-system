import { useState } from 'react';

function ProductForm() {
    const [productName, setProductName] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [description, setDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImage, setProductImage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic to handle product submission goes here
        fetch("addProduct",{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({productName, categoryName, description, productPrice})
        })
        .then(response => {
            if(response.ok) {
                alert("Category is added succefully")
            }
            else{
                alert("Category is already exist")
            }
        })
        .catch(error => {
            alert('Adding category failed');
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-purple-50">
            <form className="w-full max-w-lg p-8 space-y-8 bg-white rounded-lg shadow-lg" onSubmit={handleSubmit} >
                <h2 className="text-2xl font-bold text-purple-700">Add a New Product</h2>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block text-purple-900 text-sm font-bold mb-2" htmlFor="product-name">
                            Product Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-purple-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="product-name" type="text" placeholder="Enter product name" value={productName} onChange={(e) => setProductName(e.target.value)} />
                    </div>
                    <div className="w-full px-3">
                        <label className="block text-purple-900 text-sm font-bold mb-2" htmlFor="product-name">
                            Category Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-purple-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="category-name" type="text" placeholder="Enter category name" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
                    </div>
                    <div className="w-full px-3">
                        <label className="block text-purple-900 text-sm font-bold mb-2" htmlFor="product-name">
                            Description
                        </label>
                        <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-purple-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="description-name" type="text" placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className="w-full px-3">
                        <label className="block text-purple-900 text-sm font-bold mb-2" htmlFor="product-price">
                            Price
                        </label>
                        <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-purple-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="product-price" type="number" placeholder="Enter price" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
                    </div>
                    <div className="w-full px-3">
                        <label className="block text-purple-900 text-sm font-bold mb-2" htmlFor="product-image">
                            Upload Image
                        </label>
                        <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-purple-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="product-image" type="file" placeholder="Upload Image" value={productImage} onChange={(e) => setProductImage(e.target.value)} />
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
