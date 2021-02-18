import React, { useEffect, useRef } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { setDate } from "../../store/actions/date-actions";
import {
  setValue,
  setName,
  setNewValue,
  setNewName,
  showSelect,
  showNewSelect,
  fetchCurrencyAction,
} from "../../store/actions/currency-actions";
import {
  setRecord,
  updateHistory,
  setButtonStatus,
} from "../../store/actions/history-actions";
import { addRecord } from "../../utils/utils";
import "./Exchange.scss";
import { formatDate } from "../../utils/utils";
import { DAYS, DEFAULT_DATE, CURRENCY_LIST } from "../../const";
import { ReactComponent as ArrowSelect } from "./img/arrow-select.svg";
import { ReactComponent as ArrowToLeft } from "./img/arrow-to-left.svg";
import { ReactComponent as ArrowToRight } from "./img/arrow-to-right.svg";

const Exchange = () => {
  const date = useSelector((state) => state.DATE.date);
  const ratio = useSelector((state) => state.CURRENCY.ratio);
  const value = useSelector((state) => state.CURRENCY.value);
  const name = useSelector((state) => state.CURRENCY.name);
  const newValue = useSelector((state) => state.CURRENCY.newValue);
  const newName = useSelector((state) => state.CURRENCY.newName);
  const isShowSelect = useSelector((state) => state.CURRENCY.isShowSelect);
  const isShowNewSelect = useSelector(
    (state) => state.CURRENCY.isShowNewSelect
  );
  const history = useSelector((state) => state.HISTORY.history);
  const isLoading = useSelector((state) => state.HISTORY.isLoading);
  const dispatch = useDispatch();
  const selectDate = useRef();
  const currencyValueInput = useRef();
  const currencyNameSelect = useRef();
  const currencyNewNameSelect = useRef();
  const currencyNewValueInput = useRef();
  const currencyNameSelectList = useRef();
  const currencyNewNameSelectList = useRef();
  const saveResultButton = useRef();

  useEffect(() => {
    const today = new Date();
    const todayDate = formatDate(today);

    const dateCopy = new Date(today);
    dateCopy.setDate(today.getDate() - DAYS);

    selectDate.current.defaultValue = todayDate;
    selectDate.current.value = todayDate;
    selectDate.current.max = todayDate;
    selectDate.current.min = formatDate(dateCopy);
    dispatch(setDate(todayDate));

    currencyValueInput.current.value = value;
    currencyNameSelect.current.textContent = name;
    currencyNewValueInput.current.value = newValue;
    currencyNewNameSelect.current.textContent = newName;

    dispatch(fetchCurrencyAction([name, newName], todayDate));
  }, []);

  useEffect(() => {
    if (!isShowSelect) {
      currencyNameSelectList.current.classList.add(
        "exchange__currency_list--hided"
      );
    }
    if (isShowSelect) {
      currencyNameSelectList.current.classList.remove(
        "exchange__currency_list--hided"
      );
    }
  }, [isShowSelect]);

  useEffect(() => {
    if (!isShowNewSelect) {
      currencyNewNameSelectList.current.classList.add(
        "exchange__currency_list--hided"
      );
    }
    if (isShowNewSelect) {
      currencyNewNameSelectList.current.classList.remove(
        "exchange__currency_list--hided"
      );
    }
  }, [isShowNewSelect]);

  useEffect(() => {
    currencyNameSelect.current.textContent = name;
  }, [name]);

  useEffect(() => {
    currencyNewNameSelect.current.textContent = newName;
  }, [newName]);

  useEffect(() => {
    currencyNewValueInput.current.value = Math.round(value * ratio * 100) / 100;
    dispatch(setNewValue(currencyNewValueInput.current.value));
  }, [ratio, value, date]);

  useEffect(() => {
    saveResultButton.current.disabled = isLoading ? true : false;
  }, [isLoading]);

  const handleDateInputChange = () => {
    if (selectDate.current.value < selectDate.current.min) {
      selectDate.current.value = selectDate.current.min;
    }
    if (selectDate.current.value > selectDate.current.max) {
      selectDate.current.value = selectDate.current.max;
    }
    dispatch(setDate(selectDate.current.value));
    dispatch(fetchCurrencyAction([name, newName], selectDate.current.value));
    return;
  };

  const handleCurrencyValueChange = () => {
    dispatch(setValue(currencyValueInput.current.value));
  };

  const handleCurrencyListChange = () => {
    if (!isShowSelect) {
      dispatch(showSelect(true));
    }
  };

  const handleCurrencyNewListChange = () => {
    if (!isShowNewSelect) {
      dispatch(showNewSelect(true));
    }
  };

  const currencyNameClick = (evt) => {
    if (!evt.target.id) {
      return;
    }
    dispatch(setName(evt.target.id));
    dispatch(fetchCurrencyAction([evt.target.id, newName], date));
  };

  const currencyNewNameClick = (evt) => {
    if (!evt.target.id) {
      return;
    }
    dispatch(setNewName(evt.target.id));
    dispatch(fetchCurrencyAction([name, evt.target.id], date));
  };

  const handleButtonClick = (evt) => {
    evt.preventDefault();
    dispatch(updateHistory());
    const record = {
      date,
      name,
      value,
      newName,
      newValue,
    };
    dispatch(setRecord(addRecord(record, history)));
  };

  return (
    <div className="exchange__main">
      <form className="exchange__form">
        <div className="exchange__form-block-wrapper">
          <div className="exchange__form-block">
            <p className="exchange__caption">У меня есть</p>
            <div className="exchange__block">
              <input
                type="number"
                className="exchange__number-input"
                min="0"
                step="1"
                onInput={handleCurrencyValueChange}
                ref={currencyValueInput}
              ></input>
              <div
                className="exchange__currency"
                onClick={handleCurrencyListChange}
              >
                <span
                  className="exchange__currency_name"
                  ref={currencyNameSelect}
                >
                  USD
                </span>
                <ArrowSelect className="exchange__currency_arrow" />
                <ul
                  className="exchange__currency_list exchange__currency_list--hided"
                  ref={currencyNameSelectList}
                  onClick={currencyNameClick}
                >
                  {CURRENCY_LIST.map((item, i) => {
                    return (
                      <li
                        className="exchange__currency_select "
                        id={item}
                        key={item}
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="exchange__arrows">
            <ArrowToLeft className="exchange__arrow" />
            <ArrowToRight className="exchange__arrow" />
          </div>
          <div className="exchange__form-block">
            <p className="exchange__caption">Хочу приобрести</p>
            <div className="exchange__block">
              <input
                type="number"
                className="exchange__number-input"
                min="0"
                readOnly
                ref={currencyNewValueInput}
              ></input>
              <div
                className="exchange__currency"
                onClick={handleCurrencyNewListChange}
              >
                <span
                  className="exchange__currency_name"
                  ref={currencyNewNameSelect}
                >
                  USD
                </span>
                <ArrowSelect className="exchange__currency_arrow" />
                <ul
                  className="exchange__currency_list exchange__currency_list--hided"
                  ref={currencyNewNameSelectList}
                  onClick={currencyNewNameClick}
                >
                  {CURRENCY_LIST.map((item, i) => {
                    return (
                      <li
                        className="exchange__currency_select"
                        id={item}
                        key={item}
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="exchange__button-wrapper">
          <label className="exchange__date-input-wrapper">
            <input
              type="date"
              className="exchange__date-input"
              defaultValue={DEFAULT_DATE}
              max={DEFAULT_DATE}
              ref={selectDate}
              required
              onBlur={handleDateInputChange}
            ></input>
          </label>
          <button
            type="button"
            className="exchange__save-button"
            onClick={handleButtonClick}
            ref={saveResultButton}
          >
            Сохранить результат
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = ({ DATE, CURRENCY, HISTORY }) => {
  return {
    date: DATE.date,
    value: CURRENCY.value,
    name: CURRENCY.name,
    newValue: CURRENCY.newValue,
    newName: CURRENCY.newName,
    isShowSelect: CURRENCY.isShowSelect,
    isShowNewSelect: CURRENCY.isShowNewSelect,
    ratio: CURRENCY.ratio,
    history: HISTORY.history,
    isLoading: HISTORY.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDate: (date) => dispatch(setDate(date)),
    setValue: (value) => dispatch(setValue(value)),
    setName: (name) => dispatch(setName(name)),
    setNewValue: (newValue) => dispatch(setNewValue(newValue)),
    setNewName: (newName) => dispatch(setNewName(newName)),
    showSelect: (isShowSelect) => dispatch(showSelect(isShowSelect)),
    showNewSelect: (isShowSelect) => dispatch(showNewSelect(isShowSelect)),
    fetchCurrencyAction: (pair) => dispatch(fetchCurrencyAction(pair)),
    setRecord: (history) => dispatch(setRecord(history)),
    updateHistory: (update) => dispatch(updateHistory(update)),
    setButtonStatus: (isLoading) => dispatch(setButtonStatus(isLoading)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Exchange);
