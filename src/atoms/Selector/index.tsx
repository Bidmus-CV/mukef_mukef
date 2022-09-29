import React, { ChangeEventHandler, MouseEventHandler, useState } from "react";
import { generateId } from "../../utils/generatedId";
import ArrowDownIcon from "../../vectors/ArrowDownIcon";
import "./selectorStyles.scss";

type SelectorProps = {
  options: Array<string>;
  label?: string;
  selectedItem?: string;
  handleChange?: Function;
};

const Selector = ({
  options = [""],
  label,
  selectedItem,
  handleChange = () => {},
}: SelectorProps) => {
  const [toggleSelector, setToggleSelector] = useState(false);

  const handleSelector = () => {
    setToggleSelector(!toggleSelector);
  };

  const handleSelectItem = (item: string) => {
    handleChange(item);
    setToggleSelector(false);
  };

  return (
    <div className="selector-wrapper">
      {" "}
      <label className="label">{label}</label>
      <div className="selector" onClick={() => handleSelector()}>
        <span className=" text-black4">{selectedItem}</span>
        <ArrowDownIcon />
      </div>
      <div className={toggleSelector ? "showOptions" : "hideOptions"}>
        {options.map((item) => (
          <div
            key={item}
            className="option"
            onClick={() => handleSelectItem(item)}
          >
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Selector;

{
  /* <select
          value={value}
          onChange={handleChange}
          name={selectorName}
          id={id}
        >
          {options.map((item) => (
            <option key={item} value={item}>
              <span className="text-red-500 hover:bg-black">{item}</span>
            </option>
          ))}
        </select> */
}
