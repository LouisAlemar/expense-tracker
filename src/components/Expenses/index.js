import ExpenseItem from "../ExpenseItem";
import Card from "../Card";

import "./Expenses.scss";

const Expenses = ({ items }) => {
  return (
    <Card className="expenses">
      {items.map((item) => {
        return <ExpenseItem key={item.id} item={item} />;
      })}
    </Card>
  );
};

export default Expenses;
