import React from "react";
import PropTypes from "prop-types";

const shapes = { icbRoundedBorder5: "rounded-[5px]" };
const variants = { icbFillWhiteA70019: "bg-white_A700_19" };
const sizes = { smIcn: "p-[11px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["icbRoundedBorder5"]),
  variant: PropTypes.oneOf(["icbFillWhiteA70019"]),
  size: PropTypes.oneOf(["smIcn"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
