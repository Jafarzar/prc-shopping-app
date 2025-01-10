import products from "@/app/data/products.json";
import { Product } from "@/app/types/product";

interface ProductDetailsProps {
  params: { id: string };
}

const ProductDetails = ({ params }: ProductDetailsProps) => {
  const product = products.find((p) => p.id === parseInt(params.id)) as Product;

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      {/* <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-cover mb-4"
      /> */}
      <p className="text-gray-700">{product.description}</p>
      <p className="text-gray-600">Price: ${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductDetails;
