import { ProductList } from "./components/ProductList";
import { Product } from "@/app/types/product";
import products from "./data/products.json";

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <ProductList products={products as Product[]} />
    </div>
  );
};

export default HomePage;
