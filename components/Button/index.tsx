import { forwardRef } from "react";

// why forward ref https://reactjs.org/docs/forwarding-refs.html

// @todo: create variant
enum ButtonVariant {
  "primary",
  "outline",
  "ghost",
  "light",
  "dark",
}

type ButtonProps = {
  isLoading?: boolean;
  isDarkBg?: boolean;
  variant?: keyof typeof ButtonVariant;
} & React.ComponentPropsWithRef<"button">;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: isDisabled,
      isLoading,
      variant = "primary",
      isDarkBg = false,
      ...props
    },
    ref
  ) => {
    const disabled = isLoading || isDisabled;

    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        className={
          "inline-flex bg-blue-50 items-center rounded px-4 py-2 font-medium focus:outline-none focus-visible:ring focus-visible:ring-primary-500 shadow-sm transition-colors duration-75"
        }
        {...props}
      >
        {isLoading && (
          <div
            className={
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            }
          >
            <span>spinner</span>
          </div>
        )}
        {children}
      </button>
    );
  }
);

export default Button;
