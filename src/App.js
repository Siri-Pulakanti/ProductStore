import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Category from "./pages/Category";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <nav style={{ padding: "1rem", background: "#eee" }}>
        <Link to="/products">Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Products products={products} />} />

        <Route path="/products" element={<Products products={products} />} />

        <Route
          path="/products/:id"
          element={<ProductDetails products={products} />}
        />
        <Route
          path="/category/:categoryName"
          element={<Category products={products} />}
        />
      </Routes>
    </div>
  );
}

export default App;
