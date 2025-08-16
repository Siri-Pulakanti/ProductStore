import React from "react";
import { Link, useParams } from "react-router-dom";

function Category({ products }) {
  const { categoryName } = useParams();
  const filtered = products.filter((p) => p.category === categoryName);

  if (filtered.length === 0) {
    return <p>No products found in {categoryName}</p>;
  }

  return (
    <div>
      <h2>{categoryName} Products</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "1rem",
        }}
      >
        {filtered.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              borderRadius: "8px",
              textDecoration: "none",
              color: "black",
            }}
          >
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Category;
