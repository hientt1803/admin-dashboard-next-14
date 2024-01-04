import React from "react";
import Card from "../ui/dashboard/card/Card";
import Chart from "../ui/dashboard/chart/Chart";
import RightBar from "../ui/dashboard/rightbar/RightBar";
import Transaction from "../ui/dashboard/transaction/Transaction";
import styles from "../ui/dashboard/dashboard.module.css";

const card = [
  {
    id: 1,
    title: "Total users",
    value: "10,457",
    percent: "35",
  },
  {
    id: 2,
    title: "Total transactions",
    value: "1,000,000",
    percent: "3",
  },
  {
    id: 3,
    title: "Total products",
    value: "36,738",
    percent: "50",
  },
];

const transactions = [
  {
    id: 1,
    name: "Michel bay",
    img: "/noavatar.png",
    status: "done",
    date: "15.07.2021",
    account: "#10.300",
  },
  {
    id: 2,
    name: "Jonh Doe",
    img: "/noavatar.png",
    status: "pending",
    date: "14.02.2024",
    account: "#3.2000",
  },
  {
    id: 3,
    name: "Misthy",
    img: "/noavatar.png",
    status: "cancelled",
    date: "14.02.2017",
    account: "#5.670",
  },
];

const data = [
  {
    name: "Sun",
    visit: 4000,
    click: 2400,
  },
  {
    name: "Mon",
    visit: 3000,
    click: 1398,
  },
  {
    name: "Tue",
    visit: 2000,
    click: 3800,
  },
  {
    name: "Wed",
    visit: 2780,
    click: 3908,
  },
  {
    name: "Thu",
    visit: 1890,
    click: 4800,
  },
  {
    name: "Fri",
    visit: 2390,
    click: 3800,
  },
  {
    name: "Sat",
    visit: 3490,
    click: 4300,
  },
];

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {card.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </div>
        <Transaction transactions={transactions} />
        <Chart data={data} />
      </div>
      <div className={styles.side}>
        <RightBar />
      </div>
    </div>
  );
};

export default Dashboard;
