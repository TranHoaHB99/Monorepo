import React from 'react';
import { Spacing } from '@ds.e/foundation';

const Margin = ({ space = Spacing.xs, left, right, top, bottom, children, }) => {
    const className = `dse-margin-${space} ${left ? `dse-margin-${left}` : ""} ${right ? `dse-margin-${right}` : ""} ${top ? `dse-margin-${top}` : ""} ${bottom ? `dse-margin-${bottom}` : ""}`;
    return React.createElement("div", { className: className }, children);
};

export { Margin as default };
//# sourceMappingURL=Margin.js.map
