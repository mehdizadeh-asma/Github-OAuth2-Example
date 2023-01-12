import React from "react";
import AwsomeButton from "./AwsomeButton";
import FloatingInput from "./FloatingInput";
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
    <div className=" d-inline-flex ">
      <FloatingLabel
        controlId="floatingInput"
        label="Github Username"
        className={" h-100    " + props.InputLabelClassName}
      >
        <Form.Control
          className={`${props.InputClassName} my-2 mx-2 pb-3 pt-3`}
          type="text"
          placeholder="username"
          ref={ref}
          style={{ height: "5vh" }}
        />
      </FloatingLabel>
      {/* <FloatingInput
        Title={props.FloatingLabelTitle || ""}
        type={props.type}
        ref={ref}
        LabelClassName={props.InputLabelClassName}
        InputClassName={props.InputClassName}
        required={props.Inputrequired}
        ValidationMessage={props.InputValidationMessage}
      /> */}
      <AwsomeButton
        type="button"
        Title={props.ButtonTitle}
        onClick={props.onClick}
        ClassName={props.ButtonCss}
        Icon={props.Icon}
        IconClass={props.IconCssClass}
      ></AwsomeButton>
    </div>
  );
});
Search.displayName = "Search";
export default Search;
