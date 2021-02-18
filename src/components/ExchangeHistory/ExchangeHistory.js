import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { setRecord, clearHistory } from "../../store/actions/history-actions";
import "./ExchangeHistory.scss";
import { formatDateToSting } from "../../utils/utils";
import { ReactComponent as Arrow } from "./img/arrow.svg";

const ExchangeHistory = () => {
  const history = useSelector((state) => state.HISTORY.history);
  const dispatch = useDispatch();

  if (!history && history.length !== 0) {
    return <div className="exchange-history__list-container" />;
  }

  const handleButtonClick = (evt) => {
    evt.preventDefault();
    dispatch(clearHistory());
  };

  return (
    <div className="exchange-history__main">
      <h2 className="exchange-history__header">История конвертация</h2>

      <ul className="exchange-history__list-container">
        {history.map(({ date, name, value, newName, newValue, key }, i) => {
          return (
            <li key={key}>
              <span className="exchange-history__item-date">
                {formatDateToSting(date)}
              </span>
              <span>
                {value} {name}
              </span>
              <Arrow className="exchange-history__item-arrow" />
              <span>
                {newValue} {newName}
              </span>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        className="exchange-history__button"
        onClick={handleButtonClick}
      >
        Очистить историю
      </button>
    </div>
  );
};

const mapStateToProps = ({ HISTORY }) => {
  return {
    history: HISTORY.history,
    update: HISTORY.update,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setRecord: (history) => dispatch(setRecord(history)),
    clearHistory: () => dispatch(clearHistory()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeHistory);
