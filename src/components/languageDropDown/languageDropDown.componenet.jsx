import React from "react";
import { Dropdown } from "semantic-ui-react";

const languageOptions = [
  { key: "English", text: "English", value: "English" },
  { key: "Turkish", text: "Turkish", value: "Turkish" },
];

const DropdownExampleSearchDropdown = () => (
  <Dropdown
    button
    className="icon"
    floating
    labeled
    icon="world"
    options={languageOptions}
    search
    onChange={() => {}}
    text="Select Language"
  />
);

export default DropdownExampleSearchDropdown;
