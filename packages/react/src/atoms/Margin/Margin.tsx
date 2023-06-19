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

const Margin: React.FC<MarginProps> = ({
  space = Spacing.xs,
  left,
  right,
  top,
  bottom,
  children,
}) => {
  const className = `dse-margin-${space} ${left ? `dse-margin-${left}` : ""} ${
    right ? `dse-margin-${right}` : ""
  } ${top ? `dse-margin-${top}` : ""} ${bottom ? `dse-margin-${bottom}` : ""}`;
  return <div className={className}>{children}</div>;
};

export default Margin;
