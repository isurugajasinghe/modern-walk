import React, { createContext, useReducer, useState } from "react";
import {
  limitResults,
  getAllCategories,
  getProductsInCategory,
} from "../api/productService";
import productReducer from "./productReducer";
import { ActionTypes } from "./actionTypes";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const initialState = {
    products: [],
    categories: [],
    categoryProducts: [],
    error: null,
  };

  const [state, dispatch] = useReducer(productReducer, initialState);
  const [loading, setLoading] = useState(false);

  async function loadProducts(limitSize) {
    try {
      setLoading(true);
      const products = await limitResults({ limitSize });
      dispatch({ type: ActionTypes.SET_PRODUCTS, payload: products });
    } catch (error) {
      dispatch({ type: ActionTypes.ERROR, payload: error.message });
    } finally {
      setLoading(false);
    }
  }

  async function loadAllCategories() {
    try {
      setLoading(true);
      const categories = await getAllCategories();
      dispatch({ type: ActionTypes.SET_CATEGORIES, payload: categories });
    } catch (error) {
      dispatch({ type: ActionTypes.ERROR, payload: error.message });
    } finally {
      setLoading(false);
    }
  }

  async function loadProductsInCategory(categoryType) {
    try {
      setLoading(true);
      const categoryProducts = await getProductsInCategory({ categoryType });
      dispatch({
        type: ActionTypes.SET_CATEGORY_PRODUCTS,
        payload: categoryProducts,
      });
    } catch (error) {
      dispatch({ type: ActionTypes.ERROR, payload: error.message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <ProductContext.Provider
      value={{
        state,
        loadProducts,
        loadAllCategories,
        loadProductsInCategory,
        loading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
