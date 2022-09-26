import Input from "../../../atoms/Input";
import AgasBox from "../../../molecules/AgasBox";
import DashboardLayout from "../../../templates/DashboardLayout";
import ArrowIcon from "../../../vectors/ArrowIcon";
import GrayBulletIcon from "../../../vectors/GrayBulletIcon";
import GreenBulletIcon from "../../../vectors/GreenBulletIcon";
import SearchIcon from "../../../vectors/SearchIcon";
import "./Transaction.scss";

const Transaction = () => {
  return (
    <DashboardLayout>
      <AgasBox />
      <div className="main-section">
        <h3 className="transaction">Transaction History</h3>
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
              <div className="year pt-3 flex items-center gap-3">
                <p>Year 2021</p>
                <ArrowIcon />
              </div>
            </div>
            <div className="right-card">
              <h4>Target payment</h4>
              <h1>₦1,200,000</h1>
            </div>
          </div>
          <div className="tier-two">
            <div className="donut-chart"></div>
            <div className="pay-wrap">
              <div className="payment-made">
                <div className="icon-wrap">
                  <GreenBulletIcon />
                  <p>Payment made</p>
                </div>
                <p className="payment-value">₦576,000.00</p>
              </div>
              <div className="payment-complete">
                <div className="icon-wrap">
                  <GrayBulletIcon />
                  <p>To complete</p>
                </div>
                <p className="payment-value">₦424,000.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="payment-history-section">
          <p className="payment-history">Payment history</p>
          <div className="input-background">
            <SearchIcon />
            <Input placeholder="Search for anything..." />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Transaction;
