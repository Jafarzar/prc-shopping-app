"use client";

import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/router";

const CartPage = () => {
  const {
    items,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart();
  const router = useRouter();

  if (items.length === 0) {
    return <p className="p-4">Your cart is empty.</p>;
  }

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            className="border-b py-2 flex justify-between items-center"
          >
            <div>
              <p className="font-bold">{item.name}</p>
              <p>
                ${item.price.toFixed(2)} x {item.quantity}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="bg-gray-300 text-black px-2 py-1 rounded hover:bg-gray-400"
              >
                -
              </button>
              <button
                onClick={() => increaseQuantity(item.id)}
                className="bg-gray-300 text-black px-2 py-1 rounded hover:bg-gray-400"
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <p className="text-lg font-bold">Total: ${total.toFixed(2)}</p>
        <div className="flex gap-4 mt-2">
          <button
            onClick={clearCart}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          >
            Clear Cart
          </button>
          <button
            onClick={handleCheckout}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
