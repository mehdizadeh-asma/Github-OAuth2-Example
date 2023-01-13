import React from "react";
import AwsomeButton from "./AwsomeButton";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

interface PropsType {
  //Label
  LabelTitle?: string;
  LabelCss?: string;
  //Button
  ButtonTitle?: string;
  ButtonCss?: string;
  Icon?: IconDefinition;
  IconCssClass?: string;
  onClick: () => {};
  //FlotingInput
  type: string;
  FloatingLabelTitle?: string;
  Inputrequired?: boolean;
  InputLabelClassName?: string;
  InputClassName?: string;
  InputValidationMessage?: string;
}
const Search = React.forwardRef<HTMLInputElement, PropsType>((props, ref) => {
  return (
    <div className="row  d-inline-flex  ">
      <div className="col-9  ResponsiveSearch">
        <FloatingLabel
          controlId="floatingInput"
          label="Github Username"
          className={" h-100 pt-1 fontsize08rem " + props.InputLabelClassName}
        >
          <Form.Control
            className={`${props.InputClassName} my-1 pb-3 pt-3 fontsize1rem ResponsiveInput`}
            type="text"
            placeholder="username"
            ref={ref}
            style={{ height: "5vh" }}
          />
        </FloatingLabel>
      </div>
      {/* <FloatingInput
        Title={props.FloatingLabelTitle || ""}
        type={props.type}
        ref={ref}
        LabelClassName={props.InputLabelClassName}
        InputClassName={props.InputClassName}
        required={props.Inputrequired}
        ValidationMessage={props.InputValidationMessage}
      /> */}
      <div className="col-3 ResponsiveSearch  ">
        <AwsomeButton
          type="button"
          Title={props.ButtonTitle}
          onClick={props.onClick}
          ClassName={props.ButtonCss}
          Icon={props.Icon}
          IconClass={props.IconCssClass}
        ></AwsomeButton>
      </div>
    </div>
  );
});
Search.displayName = "Search";
export default Search;
