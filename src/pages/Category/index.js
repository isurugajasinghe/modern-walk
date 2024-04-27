import React, { useEffect } from "react";
import useProducts from "../../hooks/useProducts";
import withHeader from "../../hocs/withHeader";
import { useRouter } from "next/router";
import TitleText from "../../component/TitleText";
import ProductCard from "../../component/ProductCard";
import Loader from "../../component/Loader";

function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;

  const { state, loadProductsInCategory, loading } = useProducts();

  useEffect(() => {
    if (!!category) {
      loadProductsInCategory(category);
    }
  }, [category]);

  return (
    <div id={"category"}>
      <TitleText title={category} />
      <div className="grid-container">
        {loading ? (
          <Loader />
        ) : (
          state.categoryProducts.map((product) => (
            <ProductCard
              index={category === "men's clothing" ? 0 : 1}
              key={product.id}
              productsLength={state.products.length}
              title={product.category}
              imageUrl={product.image}
              price={product.price}
              description={product.description}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default withHeader(CategoryPage);
