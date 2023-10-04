import ExpenseItem from "../ExpenseItem";

import "./Expenses.scss";

function Expenses({ items }) {
  return (
    <div className="expenses">
      {items.map((item) => {
        return <ExpenseItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default Expenses;
