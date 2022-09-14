import AgasBox from "../../../molecules/AgasBox";
import DashboardLayout from "../../../organisms/DashboardLayout";
import ArrowIcon from "../../../vectors/ArrowIcon";
import "./Transaction.scss";

const Transaction = () => {
  return (
    <DashboardLayout>
      <AgasBox />
      <div className="main-section">
        <h3>Transaction History</h3>
        <div className="cards-wrapper">
          <div className="first-card">
            <p className="text-bg">Total payment this year</p>
            <h2>₦ 32,450,000</h2>
          </div>
          <div className="second-card">
            <p className="text-bg">Total payment lifetime</p>
            <h2>₦ 32,450,000</h2>
          </div>
        </div>
        <div className="big-card">
          <div className="tier-one">
            <div className="left">
              <h2>Target Payment Information</h2>
              <div className="year">
                <p>Year 2021</p>
                <ArrowIcon />
              </div>
            </div>
            <div className="right">
              <h3>Target payment</h3>
              <h1>₦1,200,000</h1>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Transaction;
