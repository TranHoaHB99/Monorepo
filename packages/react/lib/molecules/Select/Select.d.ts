import React from "react";
type SelectOption = {
    label: string;
    value: string;
};
type SelectProps = {
    onOptionSelected?: (option: SelectOption, optionIndex: number) => void;
    options?: SelectOption[];
    label?: string;
};
declare const Select: React.FC<SelectProps>;
export default Select;
