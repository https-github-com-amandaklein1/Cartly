import { connect } from 'react-redux';
import mainProductVisual from '../src/components/mainProductVisual';
import changeProduct from '../actions/changeProduct';

const mapStateToProps = (state) => ({
  id: state.colorsOfProduct.product_id
});

const mapDispatchToProps = (dispatch) => ({
  handleProductChange: (style) => {
    dispatch(changeProduct(style));
  }
});

const changeProductContainer = connect(mapStateToProps, mapDispatchToProps)(mainProductVisual);

export default changeProductContainer;