import React, { useEffect, useRef, useState } from "react";
import Text from "../../atoms/Text/Text";
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

const Select: React.FC<SelectProps> = ({
  options = [],
  label = "Please select an option",
  onOptionSelected: handler,
   renderOption,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [overlayTop, setOverlayTop] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<null | number>(null);
  const labelRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOverlayTop((labelRef.current?.offsetHeight || 0) + 10);
  }, [labelRef.current?.offsetHeight]);

  const onOptionSelected = (option: SelectOption, index: number) => {
    if (handler) {
      handler(option, index);
    }
    setSelectedIndex(index);
    setIsOpen(false);
  };
  const onLabelClick = () => {
    setIsOpen(!isOpen);
  };

  const selectedOption = selectedIndex !== null ? options[selectedIndex] : null;

  return (
    <div className="dse-select">
      <button
        ref={labelRef}
        className="dse-select__label"
        onClick={() => onLabelClick()}
      >
        <Text>{selectedOption === null ? label : selectedOption.label}</Text>

        <svg
          width="1rem"
          height="1rem"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className={`dse-select__caret ${
            isOpen ? "dse-select__caret--open" : "dse-select__caret--closed"
          }`}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          ></path>
        </svg>
      </button>
      {isOpen ? (
        <ul style={{ top: overlayTop }} className="dse-select__overlay">
          {options.map((option, index) => {
            const isSelected = selectedIndex === index;
            const renderOptionProps = {
              isSelected,
              option,
              getOptionRecommendedProps: (overrideProps = {}) => ({
                className: `dse-select__option ${
                  isSelected ? "dse-select__option--selected" : ""
                }`,
                key: option.value,
                onClick: () => onOptionSelected(option, index),
                ...overrideProps,
              }),
            };
            if (renderOption) {
              return renderOption(renderOptionProps);
            }
            return (
              <li
                className={`dse-select__option ${
                  isSelected ? "dse-select__option--selected" : ""
                }`}
                key={option.value}
                onClick={() => onOptionSelected(option, index)}
              >
                <Text>{option.label}</Text>
                {isSelected ? (
                  <svg
                    width="1rem"
                    height="1rem"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                ) : null}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default Select;
