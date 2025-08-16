import React from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetails({ products }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>{product.title}</h2>
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{ width: "300px", borderRadius: "8px" }}
      />
      <p>{product.description}</p>
      <h3>${product.price}</h3>
      <p>{product.category}</p>

      {/* Back button */}
      <Link to="/products" style={{ display: "block", marginTop: "1rem" }}>
        ← Back to Products
      </Link>
    </div>
  );
}

export default ProductDetails;
