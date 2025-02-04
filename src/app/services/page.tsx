"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import CommentSec from "@/components/Comment";



interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image_link: string;
}

export default function EcommerceSite() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline");
        const data = await response.json();
        const formattedData: Product[] = data.map((item: any) => ({
          id: item.id,
          name: item.title || "Unknown Product", // ✅ Ensuring name is always set
          price: parseFloat(item.price) || 0, 
          description: item.description || "No description available",
          image_link: item.image_link || "/images/ecommerce.jpg", 
        }));
        setProducts(formattedData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // View product details
  const handleViewDetails = (productId: number) => {
    const product = products.find((p) => p.id === productId);
    if (product) setSelectedProduct(product);
  };

  // Add product to cart
  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Go back to product list
  const handleGoBack = () => {
    setSelectedProduct(null);
  };

  if (loading) {
    return <p className="text-center text-lg mt-6">Loading products...</p>;
  }

  return (
    <div className="bg-pink-100 min-h-screen pt-0">
      <div className="max-w-7xl mx-auto p-6 mt-[70px]">

        {/* Product Details View */}
        {selectedProduct ? (
          <div className="bg-white p-6 mt-6 rounded-lg shadow-lg border border-pink-200">
            <Image
              src={selectedProduct.image_link}
              alt={selectedProduct.name || "Product image"} // ✅ Added fallback alt text
              width={500}
              height={256}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-3xl text-black font-semibold">{selectedProduct.name}</h2>
            <p className="mt-2 text-black text-lg">{selectedProduct.description}</p>
            <p className="mt-4 text-xl font-bold text-black">${selectedProduct.price.toFixed(2)}</p>
            <div className="mt-6 flex space-x-4">
              <button
                onClick={() => handleAddToCart(selectedProduct)}
                className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-600 transition"
              >
                Add to Cart
              </button>
              <button
                onClick={handleGoBack}
                className="bg-gray-500 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-600 transition"
              >
                Go Back
              </button>
            </div>
          </div>
        ) : (
          // Product Listing View
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white p-6 rounded-lg shadow-lg border border-pink-200 hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <Image
                  src={product.image_link}
                  alt={product.name || "Product image"} // ✅ Ensuring alt is never empty
                  width={500}
                  height={192}
                  className="w-full h-auto object-cover rounded-lg mb-4"
                />

                <h3 className="text-xl text-black font-semibold">{product.name}</h3>
                <p className="mt-2 text-lg font-bold text-black">${product.price.toFixed(2)}</p>
                <div className="mt-4 flex justify-between space-x-4">
                  <button
                    onClick={() => handleViewDetails(product.id)}
                    className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-600 transition"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-gray-500 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-600 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
     
      </div>
      <CommentSec/>
    </div>
  );
}
