const changeProductReducer = (state = {}, action) => {
  switch (action.type) {
  case 'CHANGE_PRODUCT':
    return action.colorsOfProduct;
  default:
    return state;
  }
};

export default changeProductReducer;