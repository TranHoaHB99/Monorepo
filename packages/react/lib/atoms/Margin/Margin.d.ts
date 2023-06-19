import React, { ReactNode } from "react";
import { Spacing } from "@ds.e/foundation";
type MarginProps = {
    space?: keyof typeof Spacing;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
    children: ReactNode;
};
declare const Margin: React.FC<MarginProps>;
export default Margin;
