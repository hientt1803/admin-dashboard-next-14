import Card from "@/app/ui/dashboard/card/Card";
import Chart from "@/app/ui/dashboard/chart/Chart";
import RightBar from "@/app/ui/dashboard/rightbar/RightBar";
import React from "react";
import styles from "../../ui/dashboard/dashboard.module.css";

const card = [
  {
    id: 1,
    title: "Total revenue",
    value: "3,000,000",
    percent: "35",
  },
  {
    id: 2,
    title: "revenue this week",
    value: "500,000",
    percent: "15",
  },
  {
    id: 3,
    title: "revenue this month",
    value: "1,746,280",
    percent: "10",
  },
  {
    id: 4,
    title: "revenue this year",
    value: "3,000,000",
    percent: "35",
  },
  {
    id: 5,
    title: "Total products",
    value: "345,035",
    percent: "35",
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
        <Chart data={data} />
      </div>
      <div className={styles.side}>
        <RightBar />
      </div>
    </div>
  );
};

export default Dashboard;
