import * as React from "react";

/**
 * @enum {string}
 */
const buttonVariants = {
  default: "bg-green text-primary-foreground",
  destructive:
    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  outline: "text-[#0A0909] border border-input hover:bg-accent hover:text-accent-foreground",
  secondary: "text-[#0A0909] bg-secondary-50 text-secondary-foreground hover:bg-secondary/80",
  ghost: "text-[#0A0909] hover:bg-accent hover:text-accent-foreground",
  link: "text-[#0A0909] underline-offset-4 hover:underline text-primary",
};

/**
 * @enum {string}
 */
const sizeVariants = {
  default: "py-4 px-6",
  sm: "py-2 px-4",
  lg: "py-3 px-10",
  rounded: "w-16 h-16",
  xl:"py-4 px-16 max-lg:py-3 max-lg:px-12 max-md:py-2 max-md:px-8 max-sm:py-2 max-sm:px-4"
};

/**
 * @enum {string}
 */
const borderVariants = {
  default: "rounded-md",
  lg: "ro",
  xl: "rounded-xl",
  doublexl:"rounded-2xl",
  round: "rounded-full",
};

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: keyof typeof buttonVariants;
    size?: keyof typeof sizeVariants;
    border?: keyof typeof borderVariants;
    block?: Boolean
  }
>(
  /**
   * @param {{
   *   className: string,
   *   variant: keyof typeof buttonVariants,
   *   size: keyof typeof sizeVariants,
   *   border: keyof typeof borderVariants
   * }} props
   */ (
    {
      className,
      variant = "default",
      border = "default",
      size = "default",
      block = false,
      ...props
    },
    ref
  ) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const button = e.currentTarget;

      const circle = document.createElement("span");
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;

      // circle.style.width = circle.style.height = `${diameter}px`;
      // circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
      // circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
      // circle.classList.add("ripple");

      //       const ripple = button.getElementsByClassName("ripple")[0];
      // console.log('ripple', ripple);

      // if (ripple) {
      //   circle.remove();
      // }

      button.appendChild(circle);
      setTimeout(function() {
        return circle.remove()
      }, 500)
    };

    return (
      <>
        <button
          className={`text-tertiary bg-primary  relative overflow-hidden inline-flex items-center justify-center 
        font-semibold text-base md:w-fit w-full transition-all 
        ${buttonVariants[variant]} ${borderVariants[border]} 
        ${sizeVariants[size]} ${block && 'w-full'} ${className}`}
          ref={ref}
          {...props}
          onClick={handleClick}
        />
      </>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
