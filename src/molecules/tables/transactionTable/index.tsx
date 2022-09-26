import { ReactNode } from "react";
import ArrowIcon from "../../../vectors/ArrowIcon";
import "./TransactionTable.scss";

const TransactionTable = () => {
  const header = [
    { name: "DATE", img: <ArrowIcon /> },
    { name: "payment type", img: <ArrowIcon /> },
    { name: "Amount", img: <ArrowIcon /> },
    { name: "Status" },
  ];

  const tableData = [];
  return <div>TransactionTable</div>;
};

export default TransactionTable;
