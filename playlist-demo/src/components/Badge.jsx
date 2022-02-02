import React from "react";
import cn from "classnames";

const Badge = ({ className, children, ...restProps }) => (
  <span
    className={cn(
      "absolute inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none bg-gray-400 rounded-full bottom-2 right-2",
      className
    )}
    {...restProps}
  >
    {children}
  </span>
);

export default Badge;
