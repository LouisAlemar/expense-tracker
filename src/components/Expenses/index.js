import { useState } from "react";

import ExpenseItem from "../ExpenseItem";
import ExpensesFilter from "../ExpensesFilter";
import Card from "../Card";

import "./Expenses.scss";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {items.map((item) => {
          return <ExpenseItem key={item.id} item={item} />;
        })}
      </Card>
    </div>
  );
};

export default Expenses;
