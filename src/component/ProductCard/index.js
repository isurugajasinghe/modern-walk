import React from "react";

export default function ProductCard({
  index = 0,
  productsLength = 0,
  title = "",
  imageUrl = "",
  price = "",
  description = "",
}) {
  return (
    <section id="product-card">
      <div
        className={`container ${index === 0 ? "first-container" : ""} ${
          index === productsLength - 1 ? "last-container" : ""
        }`}
      >
        <p className="title-text">{title}</p>
        <img
          className="image"
          src={imageUrl}
          alt="Example Image"
          width="95"
          height="95"
        />
        <div id="description">
          <div className={`container ${index % 2 === 0 ? "even" : "odd"}`}>
            <p className="price">Rs {price}</p>
            <p className="caption">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
