import "./InstantDonationModal.scss";
import Input from "../../../atoms/Input";
import Selector from "../../../atoms/Selector";
import { useState } from "react";
import QuestionIcon from "../../../vectors/QuestionIcon";
import SlashIcon from "../../../vectors/SlashIcon";
import Button from "../../../atoms/Button";

const InstantDonationModal = () => {
  const [project, setProject] = useState("Select");
  const [paymentMethod, setPaymentMethod] = useState("Select");
  const projectSelectorOptions = ["Water", "Zakat", "Orphanage"];
  const paymentMethodSelectorOptions = ["Mastercard", "Visa", "PayPal"];

  return (
    <div className="donation-modal-container">
      <div className="instant-donation-wrap">
        <div className="instant-input-bg w-[47%]">
          <Input placeholder="Amount" />
          <span className="text-[#0000004d] text-sm">₦</span>
        </div>
        <div className="w-[47%] bg-gray4 rounded-md">
          <Selector
            options={projectSelectorOptions}
            selectedItem={project}
            handleChange={setProject}
          />
        </div>
      </div>
      <hr />
      <div className="payment-type-wrapper">
        <div className="w-[47%] bg-gray4 rounded-md">
          <Selector
            options={paymentMethodSelectorOptions}
            selectedItem={paymentMethod}
            handleChange={setPaymentMethod}
          />
        </div>
        <div className="card-holder-bg w-[47%] bg-gray4 rounded-md">
          <Input placeholder="Cardholder" />
        </div>
      </div>
      <div className="card-number-wrapper">
        <div className="card-holder-bg w-[47%] bg-gray4 rounded-md">
          <Input placeholder="Card number" />
        </div>
        <div className="card-holder-bg w-[36%] bg-gray4 rounded-md">
          <Input placeholder="CVC" />
        </div>
        <div className="image">
          <QuestionIcon />
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
            Donate
          </Button>
        </div>
      </div>
      <div className="monthly-payment">
        <div className="h-6 w-6 bg-gray4 cursor-pointer"></div>
        <p className="text-[#222222]">Save my details for donations</p>
      </div>
    </div>
  );
};

export default InstantDonationModal;
