import React, { useState, useEffect } from "react";

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The variant of the text.
   * - h1 : font-size: *36px*; line-height: *40px*; font-weight: 700;
   * - h2: font-size: *30px*; line-height: *36px*; font-weight: 700;
   * - h3: font-size: *24px*; line-height: *32px*; font-weight: 700;
   * - h4: font-size: *20px*; line-height: *28px*; font-weight: 700;
   * - h5: font-size: *18px*; line-height: *28px*; font-weight: 600;
   * - h6: font-size: *16px*; line-height: *24px*; font-weight: 600;
   * - sub1: font-size: *18px*; line-height: *28px*; font-weight: 700;
   * - sub2: font-size: *16px*; line-height: *24px*; font-weight: 700;
   * - body1: font-size: *18px*; line-height: *28px*; font-weight: 400;
   * - body2: font-size: *16px*; line-height: *24px*; font-weight: 400;
   * - body3: font-size: *14px*; line-height: *20px*; font-weight: 400;
   */

  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "sub1"
    | "sub2"
    | "body1"
    | "body2"
    | "body3";
  numberOfLines?: number;
  color?: "text-primary";
}

const textVariants = {
  h1: "text-4xl font-bold",
  h2: "text-3xl font-bold",
  h3: "text-2xl font-bold",
  h4: "text-xl font-bold",
  h5: "text-lg font-semibold",
  h6: "text-base font-semibold",
  sub1: "text-lg font-bold",
  sub2: "text-base font-bold",
  sub3: "",
  sub4: "",
  body1: "text-[18px] font-normal text-textSubColor",
  body2: "text-base font-normal text-textSubColor",
  body3: "text-sm font-normal text-textSubColor",
  body4: ""
};

const Text: React.FC<TextProps> = ({
  variant = "body1",
  className,
  children,
  numberOfLines = 0,
  color,
  ...rest
}) => {
  const [isTruncated, setIsTruncated] = useState(false);
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
    setIsReadMore(!isReadMore);
  };

  useEffect(() => {
    if (numberOfLines > 0) {
      setIsTruncated(true);
    }
  }, []);

  return (
    <>
      <p
        className={`${textVariants[variant]} ${className && className} ${
          color ? color : "text-primary-foreground"
        }  ${
          isTruncated ? `line-clamp-${numberOfLines}` : ""
        }`}
        {...rest}
      >
        {children}
      </p>
      {isTruncated && (
        <span
          className="my-4 underline text-green-500"
          onClick={toggleTruncate}
        >
          Read more
        </span>
      )}

      {!isTruncated && isReadMore && (
        <span
          className="my-4 underline text-green-500"
          onClick={toggleTruncate}
        >
          Read less...
        </span>
      )}
    </>
  );
};

Text.displayName = "Text";

export { Text };