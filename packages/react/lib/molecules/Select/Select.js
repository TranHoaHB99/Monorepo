import React, { useState, useRef, useEffect } from 'react';
import Text from '../../atoms/Text/Text.js';

const Select = ({ options = [], label = "Please select an option", onOptionSelected: handler, renderOption, }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [overlayTop, setOverlayTop] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const labelRef = useRef(null);
    useEffect(() => {
        setOverlayTop((labelRef.current?.offsetHeight || 0) + 10);
    }, [labelRef.current?.offsetHeight]);
    const onOptionSelected = (option, index) => {
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
    return (React.createElement("div", { className: "dse-select" },
        React.createElement("button", { ref: labelRef, className: "dse-select__label", onClick: () => onLabelClick() },
            React.createElement(Text, null, selectedOption === null ? label : selectedOption.label),
            React.createElement("svg", { width: "1rem", height: "1rem", fill: "none", stroke: "currentColor", "stroke-width": "1.5", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", className: `dse-select__caret ${isOpen ? "dse-select__caret--open" : "dse-select__caret--closed"}` },
                React.createElement("path", { "stroke-linecap": "round", "stroke-linejoin": "round", d: "M19.5 8.25l-7.5 7.5-7.5-7.5" }))),
        isOpen ? (React.createElement("ul", { style: { top: overlayTop }, className: "dse-select__overlay" }, options.map((option, index) => {
            const isSelected = selectedIndex === index;
            const renderOptionProps = {
                isSelected,
                option,
                getOptionRecommendedProps: (overrideProps = {}) => ({
                    className: `dse-select__option ${isSelected ? "dse-select__option--selected" : ""}`,
                    key: option.value,
                    onClick: () => onOptionSelected(option, index),
                    ...overrideProps,
                }),
            };
            if (renderOption) {
                return renderOption(renderOptionProps);
            }
            return (React.createElement("li", { className: `dse-select__option ${isSelected ? "dse-select__option--selected" : ""}`, key: option.value, onClick: () => onOptionSelected(option, index) },
                React.createElement(Text, null, option.label),
                isSelected ? (React.createElement("svg", { width: "1rem", height: "1rem", fill: "none", stroke: "currentColor", "stroke-width": "1.5", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true" },
                    React.createElement("path", { "stroke-linecap": "round", "stroke-linejoin": "round", d: "M4.5 12.75l6 6 9-13.5" }))) : null));
        }))) : null));
};

export { Select as default };
//# sourceMappingURL=Select.js.map
