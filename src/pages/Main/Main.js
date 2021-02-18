import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import {
  showSelect,
  showNewSelect,
} from "../../store/actions/currency-actions";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Converter from "../../components/Converter/Converter";
import Footer from "../../components/Footer/Footer";

const Main = () => {
  const isShowSelect = useSelector((state) => state.CURRENCY.isShowSelect);
  const isShowNewSelect = useSelector(
    (state) => state.CURRENCY.isShowNewSelect
  );
  const dispatch = useDispatch();

  const handleMainPageClick = () => {
    if (isShowSelect) {
      dispatch(showSelect(false));
    }
    if (isShowNewSelect) {
      dispatch(showNewSelect(false));
    }
  };

  return (
    <div onClick={handleMainPageClick}>
      <Header />
      <Hero />
      <Converter />
      <Footer />
    </div>
  );
};

const mapStateToProps = ({ CURRENCY }) => {
  return {
    isShowSelect: CURRENCY.isShowSelect,
    isShowNewSelect: CURRENCY.isShowNewSelect,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showSelect: (value) => dispatch(showSelect(value)),
    showNewSelect: (value) => dispatch(showNewSelect(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
