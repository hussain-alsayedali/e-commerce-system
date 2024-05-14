import { useState } from 'react';
import instance from "../api/axios.ts";


function CategoryForm() {
    const [categoryName, setCategoryName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic to handle product submission goes here

        instance.post("/admin/addCategory", {
            categoryName: categoryName
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error('Adding category failed');
          });

        // fetch("/addCategory",{
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ categoryName })
        // })
        // .then(response => {
        //     if(response.ok) {
        //         alert("Category is added succefully")
        //     }   
        //     else{
        //         alert("Category is already exist")
        //     }
        // })
        // .catch(error => {
        //     alert('Adding category failed');
        // });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-purple-50">
            <form className="w-full max-w-lg p-8 space-y-8 bg-white rounded-lg shadow-lg" onSubmit={handleSubmit} >
                <h2 className="text-2xl font-bold text-purple-700">Add a New Category</h2>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block text-purple-900 text-sm font-bold mb-2" htmlFor="product-name">
                            Category Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-purple-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="category-name" type="text" placeholder="Enter category name" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
                    </div>

                    <div className="w-full px-3">
                        <button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Add Category
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CategoryForm;
