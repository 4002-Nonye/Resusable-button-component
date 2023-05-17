import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({
  //the rest operator will handle events called on the buttons rather than passing each event down to the underlying button component
  children,
  primary,
  secondary,
  danger,
  success,
  warning,
  outline,
  rounded,
  ...rest
}) => {
  //USING THE CLASSNAMES LIBRARY TO ADD STYLES ACCORDING TO WHAT WAS PASSED
  const finalClass = classNames(rest.className,
    "px-3 py-1.5 border flex justify-center items-center",
    {
      "bg-blue-500  border-blue-500 text-white ": primary,
      "bg-gray-900  border-gray-900 text-white": secondary,
      "bg-green-500  border-green-500 text-white": success,
      "bg-yellow-400  border-yellow-400 text-black hover:scale-125": warning,
      "bg-red-500 border-red-500  text-white ": danger,
      "border-blue-400 border-2": outline,
      " rounded-full": rounded,
    }
  );

  return (
    //CHILDREN means whatever you wrap inside the <Button/></Button> can be accessed through children
    //using the rest operator to access all other events/objects
    <button {...rest} className={finalClass}>
      {children}
    </button>
  );
};
Button.propTypes = {
  checkVariant: ({
    primary,
    secondary,
    danger,
    success,
    warning,
    outline,
    rounded,
  }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!danger) +
      Number(!!success) +
      Number(!!warning);
    if (count > 1) {
      throw new Error(`opps! don't override styles please`);
    }
  },
};

export default Button;
