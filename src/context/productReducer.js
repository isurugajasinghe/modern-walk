import { ActionTypes } from "./actionTypes";

function productReducer(state, action) {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    case ActionTypes.SET_CATEGORIES:
      return { ...state, categories: action.payload };
    case ActionTypes.SET_CATEGORY_PRODUCTS:
      return { ...state, categoryProducts: action.payload };
    case ActionTypes.ERROR:
      return { ...state, error: action.payload };
    default:
      throw new Error(`*** Unhandled action : ${action.type}`);
  }
}

export default productReducer;
