import Chart from "@/app/ui/dashboard/chart/Chart";
import RightBar from "@/app/ui/dashboard/rightbar/RightBar";
import Transaction from "@/app/ui/dashboard/transaction/Transaction";
import styles from "../../ui/dashboard/transactions/transaction.module.css";

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
  {
    id: 4,
    name: "hanna",
    img: "/noavatar.png",
    status: "done",
    date: "15.07.2021",
    account: "#10.300",
  },
  {
    id: 5,
    name: "Joe",
    img: "/noavatar.png",
    status: "cancelled",
    date: "14.02.2024",
    account: "#3.2000",
  },
  {
    id: 6,
    name: "spring",
    img: "/noavatar.png",
    status: "cancelled",
    date: "14.02.2017",
    account: "#5.670",
  },
  {
    id: 7,
    name: "javascript",
    img: "/noavatar.png",
    status: "done",
    date: "15.07.2021",
    account: "#10.300",
  },
  {
    id: 8,
    name: "java",
    img: "/noavatar.png",
    status: "done",
    date: "14.02.2024",
    account: "#3.2000",
  },
  {
    id: 9,
    name: "nodejs",
    img: "/noavatar.png",
    status: "cancelled",
    date: "14.02.2017",
    account: "#5.670",
  },
];

const data = [
  {
    name: "Sun",
    visit: 10000,
    click: 7400,
  },
  {
    name: "Mon",
    visit: 300000,
    click: 4896,
  },
  {
    name: "Tue",
    visit: 400000,
    click: 500000,
  },
  {
    name: "Wed",
    visit: 70000,
    click: 30460,
  },
  {
    name: "Thu",
    visit: 40000,
    click: 30000,
  },
  {
    name: "Fri",
    visit: 150000,
    click: 134600,
  },
  {
    name: "Sat",
    visit: 200000,
    click: 147090,
  },
];

const TransactionPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Transaction transactions={transactions} />
        <Chart data={data} />
      </div>
      <div className={styles.side}>
        <RightBar />
      </div>
    </div>
  );
};

export default TransactionPage;
