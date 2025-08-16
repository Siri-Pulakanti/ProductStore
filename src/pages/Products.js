import React from "react";
import { Link } from "react-router-dom";

function Products({ products }) {
  return (
    <div>
      <h2 style={{ textAlign: "center", color: "maroon" }}>Fetched Products</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        {products.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <div
              className="card"
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "1rem",
                textAlign: "center",
                background: "#fff",
              }}
            >
              <h3>{product.title}</h3>
              <h4>${product.price}</h4>
              <Link
                to={`/category/${product.category}`}
                style={{
                  display: "block",
                  marginTop: "0.5rem",
                  fontSize: "0.9rem",
                  color: "blue",
                }}
              >
                See more in {product.category}
              </Link>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
