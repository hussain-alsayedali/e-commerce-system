import { useState } from "react";
import Sidebar from "../components/Sidebar.tsx";
import Dashboard from "../components/Dashboard.tsx";
import instance from "../api/axios.ts";
import { useNavigate } from "react-router-dom";

// ProductForm component
function ProductForm() {
  // State variables for form inputs
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [categoryName, setCategoryName] = useState("");

  // Navigation hook
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    // Prevent default form submission
    e.preventDefault();

    // Send a POST request to add a new product
    instance
      .post("/admin/addProduct", {
        name: productName,
        description: description,
        price: productPrice,
        categoryName: categoryName,
      })
      .then((response) => {
        // Alert user on successful product addition
        alert("Product is added successfully");
        // Navigate to admin main page
        navigate("/adminmainpage");
      })
      .catch((error) => {
        // Log and alert user on error
        console.error("Adding product failed:", error);
        alert("Adding product failed");
      });
  };

  // State variable for sidebar toggle
  const [sidebarToggle, setSidebarToggle] = useState(true);

  // Return JSX
  return (
    <>
      {/* Sidebar */}
      <Sidebar sidebarToggle={sidebarToggle} role="admin" />
      {/* Dashboard */}
      <Dashboard
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
      {/* Product form */}
      <div className="min-h-screen flex items-center justify-center bg-purple-50">
        {/* Form container */}
        <form
          className="w-full max-w-lg p-8 space-y-8 bg-white rounded-lg shadow-lg"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          {/* Form title */}
          <h2 className="text-2xl font-bold text-purple-700">
            Add a New Product
          </h2>
          {/* Form inputs */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              {/* Product Name input */}
              <label
                className="block text-purple-900 text-sm font-bold mb-2"
                htmlFor="product-name"
              >
                Product Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-50 text-gray-700 border border-purple-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                name="product-name"
                id="product-name"
                type="text"
                placeholder="Enter product name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            <div className="w-full px-3">
              {/* Category Name input */}
              <label
                className="block text-purple-900 text-sm font-bold mb-2"
                htmlFor="product-name"
              >
                Category Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-50 text-gray-700 border border-purple-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="category-name"
                type="text"
                placeholder="Enter category name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </div>
            <div className="w-full px-3">
              {/* Description input */}
              <label
                className="block text-purple-900 text-sm font-bold mb-2"
                htmlFor="product-name"
              >
                Description
              </label>
              <input
                name="description"
                className="appearance-none block w-full bg-gray-50 text-gray-700 border border-purple-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="description-name"
                type="text"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="w-full px-3">
              {/* Price input */}
              <label
                className="block text-purple-900 text-sm font-bold mb-2"
                htmlFor="product-price"
              >
                Price
              </label>
              <input
                className="appearance-none block w-full bg-gray-50 text-gray-700 border border-purple-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="product-price"
                name="product-price"
                type="number"
                placeholder="Enter price"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              />
            </div>
            {/* <div className="w-full px-3">
                        <label className="block text-purple-900 text-sm font-bold mb-2" htmlFor="product-image">
                            Upload Image
                        </label>
                        <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-purple-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name='file' id="product-image" type="file" placeholder="Upload Image" value={productImage} onChange={(e) => setProductImage(e.target.value)} />
                    </div> */}
            <div className="w-full px-3">
              {/* Add Product button */}
              <button
                className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ProductForm;
