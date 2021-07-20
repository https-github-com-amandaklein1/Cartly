
const changeColorReducer = (state = null, action) => {
  switch (action.type) {
  case 'CHANGE_COLOR':
    return action.color || null;
  default:
    return state;
  }
};

export default changeColorReducer;