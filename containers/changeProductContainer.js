import { connect } from 'react-redux';
import currentProduct from '../src/components/currentProduct';
import changeColor from '../actions/changeColor';

const mapStateToProps = (state) => ({
  styles: state.colorsOfProduct
});

const mapDispatchToProps = (dispatch) => ({
  handleColorChange: (style) => {
    dispatch(changeColor(style));
  }
});

const changeProductContainer = connect(mapStateToProps, mapDispatchToProps)(currentProduct);

export default changeProductContainer;