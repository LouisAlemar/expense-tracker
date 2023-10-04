import { useState } from "react";

import ExpenseDate from "../ExpenseDate";
import Card from "../Card";

import "./ExpenseItem.scss";

const ExpenseItem = ({ item }) => {
  const [title, setTitle] = useState(item.title);

  const clickHandler = () => {
    setTitle("Updated!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={item.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${item.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
