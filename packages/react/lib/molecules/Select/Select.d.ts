import React from "react";
type SelectOption = {
    label: string;
    value: string;
};
type RenderOptionProps = {
    isSelected: boolean;
    option: SelectOption;
    getOptionRecommendedProps: (overrideProps?: Object) => Object;
};
type SelectProps = {
    onOptionSelected?: (option: SelectOption, optionIndex: number) => void;
    options?: SelectOption[];
    label?: string;
    renderOption?: (props: RenderOptionProps) => React.ReactNode;
};
declare const Select: React.FC<SelectProps>;
export default Select;
