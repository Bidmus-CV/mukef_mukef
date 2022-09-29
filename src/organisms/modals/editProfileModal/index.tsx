import "./EditProfile.scss";
import Input from "../../../atoms/Input";
import ArrowDownIcon from "../../../vectors/ArrowDownIcon";
import Button from "../../../atoms/Button";
import SaveModal from "../saveModal";
import Modal from "..";
import { useState } from "react";
import Selector from "../../../atoms/Selector";
import { generateId } from "../../../utils/generatedId";

const EditProfileModal = () => {
  const id = generateId();
  const [formField, setFormField] = useState({});
  const [title, setTitle] = useState("Sheikh");
  const [state, setState] = useState("Select");
  const [save, setSave] = useState(false);
  const titleSelectorOptions = ["Sheikh", "Alhaji", "Alhaja", "Prof."];
  const stateSelectorOptions = [
    "Kwara",
    "Oyo",
    "Lagos",
    "Ogun",
    "Osun",
    "Ekiti",
    "Ondo",
  ];

  return (
    <div className="edit-modal-container">
      <div className="selector-wrap">
        <div className="input-bg">
          <Selector
            options={titleSelectorOptions}
            selectedItem={title}
            handleChange={setTitle}
            label="Title"
          />
        </div>
        <div className="w-[65%] ">
          <Input
            placeholder="Abdul-Ganiyy Oladosu AGAS..."
            label=" Full Name"
          />
        </div>
      </div>
      <div className="flex items-center justify-center py-6 w-full">
        <Input placeholder="profagas@gmail.com" label="Email" />
      </div>
      <div className="phone-number-wrapper">
        <div className="w-[48%]">
          <Input placeholder="080123456789" label="Phone Number" />
        </div>
        <div className="w-[48%]">
          <Input placeholder="080123456789" label="Phone Number" />
        </div>
      </div>
      <div className="flex items-center justify-center py-6 w-[98.5%]">
        <Input placeholder="profagas street....." label="Address" />
      </div>
      <div className="phone-number-wrapper">
        <div className="w-[48%]">
          <Selector
            options={stateSelectorOptions}
            selectedItem={state}
            handleChange={setState}
            label="State"
          />
        </div>
        <div className="w-[48%]">
          <Input placeholder="Nigerian" label="Nationality" />
        </div>
      </div>
      <div className="w-full mt-4">
        <label className="text-sm text-gray3" htmlFor={id}>
          Favourite Quote
        </label>
        <div className="textarea-wrap w-full">
          <textarea id={id} name="" placeholder="إِنَّ سَعْيَكُمْ لَشَتَّىٰ" />
        </div>
      </div>
      <hr />
      <p className="my-4 self-start">Change Password</p>
      <div className="phone-number-wrapper">
        <div className="w-[48%] text-black4 bg-gray4 rounded-md">
          <Input placeholder="Password" type="password" />
        </div>
        <div className="w-[48%] bg-gray4 rounded-md">
          <Input placeholder="Confirm Password" type="password" />
        </div>
      </div>
      <div className="flex gap-4 items-center py-8">
        <div className="h-6 w-6 bg-gray4 cursor-pointer"></div>
        <p className="text-[#222222]">Receive update from us</p>
        <div className="button-wrap">
          <Button
            customClasses="bg-primary ml-[2rem] w-[16.5rem] text-whitee rounded-md font-medium"
            onClick={() => setSave(true)}
          >
            Save
          </Button>
          <Modal
            title="Save"
            openModal={save}
            closeModal={() => setSave(false)}
            width="25rem"
          >
            <SaveModal />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
