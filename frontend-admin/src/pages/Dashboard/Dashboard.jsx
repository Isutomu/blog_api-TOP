import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.div}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Dashboard;
