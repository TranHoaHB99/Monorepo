import React, { ReactNode } from "react";
import { FontSize } from "@ds.e/foundation";
type TextProps = {
    size?: keyof typeof FontSize;
    children: ReactNode;
};
declare const Text: React.FC<TextProps>;
export default Text;
