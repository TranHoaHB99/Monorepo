import React, { useState } from 'react';

const Select = ({ options = [], label = "Please select an option", onOptionSelected: handler, }) => {
    const [isOpen, setIsOpen] = useState(false);
    const onOptionSelected = (option, index) => {
        if (handler)
            handler(option, index);
    };
    const onLabelClick = () => {
        setIsOpen(!isOpen);
    };
    return (React.createElement("div", null,
        React.createElement("button", { onClick: () => onLabelClick() }, label),
        isOpen ? (React.createElement("ul", null, options.map((option, index) => (React.createElement("li", { key: option.value, onClick: () => onOptionSelected(option, index) }, option.label))))) : null));
};

export { Select as default };
//# sourceMappingURL=Select.js.map
