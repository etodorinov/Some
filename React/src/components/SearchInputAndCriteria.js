import { useState, useEffect, useContext } from "react";

import { PeopleContext } from "../context/PeopleContext";

export const SearchInputAndCriteria = () => {
  const { setSearchedPeople, initialPeople } = useContext(PeopleContext);
  const people = initialPeople;

  const [values, setValues] = useState({
    input: "",
    page: 1,
    select: "3",
    left: 3,
    right: 3,
    clickInInputField: false,
  });

  const numberOfButtons = Math.ceil(people?.length / Number(values?.select));

  useEffect(
    () =>
      setValues((values) => ({
        ...values,
        clickInInputField: false,
        page: 1,
        left: 1,
        right: numberOfButtons,
      })),
    [numberOfButtons]
  );

  useEffect(
    () =>
      values.input !== ""
        ? setSearchedPeople(seacrhByNames())
        : setSearchedPeople(
            initialPeople?.slice(
              (values.page - 1) * Number(values.select),
              values.page * Number(values.select)
            )
          ),

    [values]
  );

  let selectOptions = createSelect(values.select);
  let buttons = createButtons(values);

  function seacrhByNames() {
    let inputResult = [];

    initialPeople.forEach((x) => {
      if (
        x.firstName.toLowerCase().includes(values.input.toLowerCase()) ||
        x.lastName.toLowerCase().includes(values.input.toLowerCase())
      ) {
        inputResult.push(x);
      }
    });

    return inputResult;
  }

  function changeHandler(e) {
    e.preventDefault();

    if (e.target.textContent === "---1------3------5------All---") {
      setValues((values) => ({
        ...values,
        clickInInputField: false,
        select: e.target.value,
      }));
    } else if (e.target.name === "input") {
      setValues((values) => ({
        ...values,
        clickInInputField: false,
        [e.target.name]: e.target.value,
      }));

      createButtons(values.page);
    } else {
      setValues((values) => ({
        ...values,
        clickInInputField: false,
        [e.target.name]: e.target.value,
        left: Number(e.target.value),
        right: numberOfButtons - e.target.value + 1,
      }));
    }
  }

  function valueChange(e) {
    e.preventDefault();

    if (e.target.name === "left") {
      setValues((values) => ({
        ...values,
        clickInInputField: false,
        left: Number(values["left"] - 1),
        right: Number(values["right"] + 1),
        page: Number(values.page) - 1,
      }));
    } else if (e.target.name === "right") {
      setValues((values) => ({
        ...values,
        clickInInputField: false,
        right: Number(values["right"]) - 1,
        left: Number(values["left"]) + 1,
        page: Number(values.page) + 1,
      }));
      createButtons(values.page);
    }
  }

  function createSelect(selected) {
    return [
      { content: "---1---", value: "1", name: "select" },
      { content: "---3---", value: "3", name: "select" },
      { content: "---5---", value: "5", name: "select" },
      { content: "---All---", value: people?.length, name: "select" },
    ].map((x) => (x.value === selected ? { ...x, selected: "selected" } : x));
  }

  function createButtons(page) {
    return [
      { content: "1", value: "1", name: "page" },
      { content: "2", value: "2", name: "page" },
      { content: "3", value: "3", name: "page" },
      { content: "4", value: "4", name: "page" },
      { content: "5", value: "5", name: "page" },
      { content: "6", value: "6", name: "page" },
      { content: "7", value: "7", name: "page" },
      { content: "8", value: "8", name: "page" },
    ]
      .filter((x, i) => i < numberOfButtons)
      .map((x) =>
        Number(x.value) === Number(page.page)
          ? { ...x, className: "page-active-button" }
          : { ...x, className: "page-button" }
      );
  }

  return (
    <form className="form">
      {/* <label
        className={
          values?.clickInInputField ? "active-input" : "inactive-input"
        }
      >
        Enter Keyword
      </label> */}
      <input
        type="text"
        className="input"
        name="input"
        placeholder="Enter Keyword"
        onChange={changeHandler}
        value={values.input}
      ></input>

      <div className="page" onClick={changeHandler}>
        {buttons.map((x, i) => (
          <button
            key={i * 6}
            type="button"
            name={x.name}
            value={x.value}
            className={x.className}
          >
            {x?.content}
          </button>
        ))}
      </div>

      <div className="changers">
        {values.left !== 1 ? (
          <button
            type="button"
            className="changers-button"
            name="left"
            onClick={valueChange}
          >
            {"<"}
          </button>
        ) : null}
        {values.right !== 1 ? (
          <button
            type="button"
            className="changers-button"
            name="right"
            onClick={valueChange}
          >
            {">"}
          </button>
        ) : null}
      </div>

      <div
        className="select"
        onChange={changeHandler}
        defaultValue={values.select}
      >
        <select className="inner-select">
          {selectOptions.map((x) =>
            x.selected === "selected" ? (
              <option
                key={x.value * 12}
                name={x.name}
                value={x.value}
                selected={true}
              >
                {x.content}
              </option>
            ) : (
              <option key={x.value * 12} name={x.name} value={x.value}>
                {x.content}
              </option>
            )
          )}
        </select>
      </div>
    </form>
  );
};
