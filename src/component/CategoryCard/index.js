import { useRouter } from "next/router";
import React from "react";

export default function CategoryCard({ title = "Title" }) {
  const router = useRouter();

  const onClicked = () => {
    router.push({
      pathname: "/Category",
      query: {
        category:
          title === "Men's Clothing" ? "men's clothing" : "women's clothing",
      },
    });
  };

  return (
    <section
      id="category-card"
      onClick={() => {
        onClicked();
      }}
    >
      <div
        className={`container ${
          title !== "Men's Clothing" && "woment-container"
        }`}
      >
        <p className="title-text">{title}</p>
      </div>
    </section>
  );
}
