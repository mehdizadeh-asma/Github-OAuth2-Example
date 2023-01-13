import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface PropsType {
  Title?: string;
  type: "reset" | "button" | "submit";
  ClassName?: string;
  Icon?: IconDefinition;
  IconClass?: string;
  onClick?: () => void;
}
const AwsomeButton = React.forwardRef<HTMLButtonElement, PropsType>(
  (props, ref) => {
    return (
      <button
        type={props.type}
        ref={ref}
        className={
          "btn ResponsiveBtn pt-1 pb-0 align-self-center text-white w8vw fontsize1rem " +
          props.ClassName
        }
        onClick={props.onClick}
      >
        {props.Icon ? (
          <p>
            {props.Title}
            {<FontAwesomeIcon className="w1vw ResponsiveIcon" icon={props.Icon} />}
          </p>
        ) : (
          <p className="">{props.Title}</p>
        )}
      </button>
    );
  }
);
AwsomeButton.displayName = "AwsomeButton";
export default AwsomeButton;
