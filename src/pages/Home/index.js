import React, { useEffect } from "react";
import useProducts from "../../hooks/useProducts";
import withHeader from "../../hocs/withHeader";
import CategoryCard from "../../component/CategoryCard";
import ProductCard from "../../component/ProductCard";
import TitleText from "../../component/TitleText";
import Loader from "../../component/Loader";

function HomePage() {
  const { state, loadProducts, loadAllCategories, loading } = useProducts();

  useEffect(() => {
    loadProducts(15);
    loadAllCategories();
  }, []);

  if (state.error) {
    return <div>Error: {state.error}</div>;
  }

  return (
    <div id="home">
      <TitleText title="Flash Sale" />
      <div className="card-scroll-container">
        {loading ? (
          <Loader />
        ) : (
          <div className="card-scroll">
            {state.products.map((product, index) => (
              <ProductCard
                index={index}
                key={product.id}
                productsLength={state.products.length}
                title={product.category}
                imageUrl={product.image}
                price={product.price}
                description={product.description}
              />
            ))}
            )
          </div>
        )}
      </div>
      <TitleText title="Categories" />
      <div className="category-container">
        <CategoryCard title="Men's Clothing" />
        <div className="width-spacer" />
        <CategoryCard title="Women's Clothing" />
      </div>
    </div>
  );
}

export default withHeader(HomePage);
