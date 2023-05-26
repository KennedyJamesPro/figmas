import React from "react";

const variantClasses = {
  h1: "font-normal sm:text-5xl md:text-5xl text-[97px]",
  h2: "font-normal sm:text-5xl md:text-5xl text-[95px]",
  h3: "font-normal sm:text-5xl md:text-5xl text-[89px]",
  h4: "font-normal sm:text-5xl md:text-5xl text-[75px]",
  h5: "font-normal sm:text-5xl md:text-5xl text-7xl",
  h6: "font-normal sm:text-[39px] md:text-[45px] text-[49px]",
  body1: "font-normal sm:text-[32px] md:text-[38px] text-[42px]",
  body2: "font-normal sm:text-4xl md:text-[38px] text-[40px]",
  body3: "font-normal sm:text-[35px] md:text-[37px] text-[39px]",
  body4: "font-normal text-3xl sm:text-[26px] md:text-[28px]",
  body5: "font-semibold text-[22px] sm:text-lg md:text-xl",
  body6: "font-semibold text-xl",
  body7: "font-normal text-[19px]",
  body8: "text-[17px]",
  body9: "font-normal sm:text-5xl md:text-5xl text-[161px]",
  body10: "text-[15px]",
  body11: "font-normal text-xs",
  body12: "font-normal sm:text-5xl md:text-5xl text-[114px]",
};

const Text = ({ children, className = "", variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
