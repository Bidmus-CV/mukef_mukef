import Button from "../../../atoms/Button";
import Input from "../../../atoms/Input";
import ArrowDownIcon from "../../../vectors/ArrowDownIcon";
import ColoredFileIcon from "../../../vectors/ColoredFileIcon";
import ExclamationIcon from "../../../vectors/ExclamationIcon";
import FileIcon from "../../../vectors/FileIcon";
import QuestionMarkIcon from "../../../vectors/QuestionMarkIcon";
import SlashIcon from "../../../vectors/SlashIcon";
import "./DonationModal.scss";

const DonationModal = () => {
  return (
    <div className="modal-container">
      <div className="donation-modal-wrap">
        <div className="input-bg">
          <Input placeholder="Amount" />
          <span className="text-[#0000004d]">₦</span>
        </div>
        <div className="input-bg">
          <Input placeholder="Year" />
          <FileIcon />
        </div>
      </div>
      <div className="monthly-payment">
        <div className="h-6 w-6 bg-gray4 cursor-pointer"></div>
        <p className="text-[#222222]">
          Remind me to make payment every Month or
        </p>
        <ColoredFileIcon />
      </div>
      <hr />
      <div className="cardholder-wrap">
        <div className="input-bg">
          <Input placeholder="Payment method" />
          <ArrowDownIcon />
        </div>
        <div className="input-bg w-[18rem]">
          <Input placeholder="Cardholder" />
        </div>
      </div>
      <div className="cardnumber-wrap">
        <div className="input-bg w-[26rem]">
          <Input placeholder="Card number" />
        </div>
        <div className="input-bg w-[16rem] ">
          <Input placeholder="CVC" />
        </div>
        <div className="image">
          <QuestionMarkIcon />
        </div>
      </div>
      <div className="expirydate-wrap">
        <div className="expiry-bg">
          <p className="text-gray3">Expiry</p>
          <input placeholder="M" />
          <SlashIcon />
          <input placeholder="Y" />
        </div>
        <div className="button-wrap">
          <Button customClasses="bg-primary w-[16rem] text-whitee rounded-md font-medium">
            Add donation
          </Button>
        </div>
      </div>
      <div className="monthly-payment">
        <div className="h-6 w-6 bg-gray4 cursor-pointer"></div>
        <p className="text-[#222222]">Save my details for donations </p>
      </div>
      <hr />
      <div className="exclamation-wrap">
        <ExclamationIcon />
        <p className="text-center w-[60%] text-gray3 text-xs">
          Donation may be made at convenient time, but must be completed before
          or at the end of the year.
        </p>
      </div>
    </div>
  );
};

export default DonationModal;
