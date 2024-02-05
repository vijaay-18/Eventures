import * as React from "react";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, ...props }, ref) => {

    return (
      <>
        {/* <div className="w-full md:w-72 my-3">
          <div className="relative h-10 w-full min-w-[200px]">
            <input
              className="peer h-full w-full rounded-[7px] border border-inputBorder border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-inputColor outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-inputBorder placeholder-shown:border-t-inputBorder focus:border-2 focus:border-primary focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-inputDisabled"
              placeholder=" "
              type={type}
              ref={ref}
              {...props}
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-labelColor transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-inputBorder before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-inputBorder after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-labelFocusColor peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-primary peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-primary peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-labelFocusColor">
              {label}
            </label>
          </div>
        </div> */}
        
        <div className="w-full md:w-72 my-3">
          <div className="relative h-12 w-full min-w-[200px]">
            <input
              className=" peer h-full w-full rounded-md border border-inputBorder border-t-transparent bg-transparent px-3 py-3.5 font-sans text-sm font-normal text-inputColor outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-inputBorder placeholder-shown:border-t-inputBorder focus:border-2 focus:border-primary focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-inputDisabled"
              placeholder=" "
              type={type}
              ref={ref}
              {...props}
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[14px] font-normal leading-tight text-labelColor transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-inputBorder before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-inputBorder after:transition-all peer-placeholder-shown:text-base peer-placeholder-shown:leading-[3.45] peer-placeholder-shown:text-labelFocusColor peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[14px] peer-focus:leading-tight peer-focus:text-primary peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-primary peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-primary peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-labelFocusColor">
              {label}
            </label>
          </div>
        </div>
      </>
    );
  }
);

interface StaticInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const StaticInput = React.forwardRef<HTMLInputElement, StaticInputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <>
        <div className="my-3">
          <div className="relative h-14 w-14">
            <input
              className="peer h-full w-full border border-inputBorder text-center bg-transparent text-sm font-normal text-inputColor outline outline-0 transition-all focus:border-2 focus:border-primary  focus:outline-0"
              placeholder=" "
              type="text"
              ref={ref}
              {...props}
            />
          </div>
        </div>
      </>
    );
  }
);

Input.displayName = "Input";
StaticInput.displayName = "StaticInput";

export { Input, StaticInput };