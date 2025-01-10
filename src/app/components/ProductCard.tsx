"use client";
import { Product } from "../types/product";
import Link from "next/link";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg">
      {/* <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover mb-4"
      /> */}
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      <div className="mt-2 flex gap-2">
        <Link href={`/products/${product.id}`}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            View Details
          </button>
        </Link>
        <button
          onClick={() => addToCart(product)}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
