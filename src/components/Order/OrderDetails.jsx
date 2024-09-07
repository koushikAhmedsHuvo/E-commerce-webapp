import React, { useContext } from 'react';
import { FiMinus } from 'react-icons/fi';
import { FaPlus } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import { CartContext } from '../context/CartContext'; // Adjust the path if needed

const OrderDetails = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  // Calculate total price
  const getTotalPrice = () => {
    return cart.reduce(
      (total, item) =>
        total + parseFloat(item.price.replace('$', '')) * (item.quantity || 1),
      0
    );
  };

  // Handle increment and decrement
  const handleQuantityChange = (itemId, change) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(1, (item.quantity || 1) + change) }
          : item
      )
    );
  };

  // Handle remove item
  const handleRemove = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <div className="w-[1440px] mx-auto p-8">
      <div>
        <h1 className="text-2xl font-semibold mb-6">
          An Overview of Your Data
        </h1>

        {/* Flex container for left (Product Details) and right (Order Summary) */}
        <div className="flex flex-row space-x-8">
          {/* Left: Product Details */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md border border-gray-300">
            <div className="flex flex-col space-y-6">
              {cart.length > 0 ? (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b pb-4"
                  >
                    {/* Left Div: Quantity Controls and Product Info */}
                    <div className="flex items-center space-x-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2 px-2 py-1 border border-gray-300 rounded-tl-lg">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, (item.quantity || 1) - 1)
                          }
                          className="text-xl text-gray-600 hover:text-gray-800"
                        >
                          <FiMinus />
                        </button>
                        <span className="text-lg font-medium">
                          {item.quantity || 1}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, (item.quantity || 1) + 1)
                          }
                          className="text-xl text-gray-600 hover:text-gray-800"
                        >
                          <FaPlus />
                        </button>
                      </div>

                      {/* Product Info */}
                      <div className="flex items-center space-x-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-20 h-20 object-cover rounded"
                        />
                        <div>
                          <p className="text-lg font-semibold">{item.title}</p>
                        </div>
                      </div>
                    </div>

                    {/* Right Div: Remove Button and Price */}
                    <div className="flex flex-col items-end justify-center">
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <RxCross1 className="w-6 h-6" />
                      </button>
                      <p className="text-lg font-semibold mt-2">
                        $
                        {parseFloat(item.price.replace('$', '')) *
                          (item.quantity || 1)}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">Your cart is empty</p>
              )}
            </div>
          </div>

          {/* Right: Order Summary */}
          {cart.length > 0 && (
            <div className="w-[380px] h-[375px] -mt-14 flex flex-col space-y-6">
              <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
              <div className="flex flex-col space-y-5 bg-[#FAFAFA] border border-[#DEDEDE] rounded-tl-lg p-6">
                <p className="flex justify-between text-lg font-medium">
                  Subtotal: <span>${getTotalPrice().toFixed(2)}</span>
                </p>
                <p className="flex justify-between text-lg font-medium">
                  Shipping: <span>Free</span>
                </p>
                <p className="flex justify-between text-lg font-medium">
                  Estimated Tax: <span>$-</span>
                </p>
                <p className="flex justify-between text-xl font-semibold">
                  Total: <span>${getTotalPrice().toFixed(2)}</span>
                </p>
              </div>
              <button className="mt-4 w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
                Go to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
