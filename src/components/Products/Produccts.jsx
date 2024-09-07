import React, { useContext, useState, useEffect } from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Link } from 'react-router-dom'; // Import Link
import productsData from '../../data.json'; // Path to your JSON file
import { CartContext } from '../context/CartContext'; // Adjust the path if needed
import { IoIosArrowForward } from 'react-icons/io';

const Products = () => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Load products and categories from the JSON data
    const initialCategories = productsData.categories.map(
      (category, index) => ({
        ...category,
        isSelected: index === 0, // Set the first category as selected by default
      })
    );

    setProducts(productsData.products);
    setCategories(initialCategories);
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="w-[1440px] h-[1304px] p-8 flex font-Barlow">
      {/* Left part: Categories */}
      <div className="w-[263px] h-[1000px] border-r border-[#E8E8E8] pr-8 mt-[40px]">
        <div className="flex flex-col space-y-4 p-4 gap-[12px]">
          {categories.map((category) => (
            <div key={category.id}>
              <Link to={`/category/${category.id}`}>
                {' '}
                {/* Wrap with Link */}
                <button
                  className={`w-[231px] h-[53px]  text-left px-6 py-3 rounded-tl-lg rounded-tr-none transition-all ${
                    category.isSelected
                      ? 'bg-[#0E0E0E] text-white'
                      : 'bg-transparent text-[#717171]'
                  }`}
                >
                  {category.name}
                </button>
              </Link>
              <hr className="border-gray-300 my-2" />
            </div>
          ))}
        </div>
      </div>

      {/* Right part: Products */}
      <div className="relative w-[894px] h-[1128px] mt-[40px] ml-[42px]">
        <div className="grid grid-cols-3 gap-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[277px] h-[484px] p-4 border-t border-[#F1F1F1] bg-white rounded-t-lg border shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-[245px] h-[236px] rounded-t-lg mb-4 bg-[#F2F2F2]"
              />
              <h1 className="text-xl font-semibold">{product.title}</h1>
              <p className="text-[#FF6600] font-semibold mt-2">
                {product.price}
              </p>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <button
                className="w-[245px] h-[42px] flex items-center justify-center bg-[#202020] text-white py-0 px-6 rounded-[5px_0px_0px_0px] mt-4 hover:bg-[#181818] transition-all gap-3"
                onClick={() => handleAddToCart(product)}
              >
                <HiOutlineShoppingBag /> Add to cart
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex space-x-4 justify-center">
          <button className="bg-gray-200 px-4 py-2 rounded-lg">1</button>
          <button className="bg-gray-200 px-4 py-2 rounded-lg">2</button>
          <button className="bg-gray-200 px-4 py-2 rounded-lg">3</button>
          <button className="bg-gray-200 px-4 py-2 rounded-lg">
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
