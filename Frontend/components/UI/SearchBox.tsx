import React from "react";
import AwsomeButton from "./AwsomeButton";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

interface PropsType {
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
}
const SearchBox = React.forwardRef<HTMLInputElement, PropsType>(
  (props, ref) => {
    return (
      <div id="searchbar" className="container-fluid">
        <div className="row">
          <div className="col-sm-9  ResponsiveSearch ">
            <FloatingLabel
              controlId="floatingInput"
              label="Github Username"
              className={
                " h-100 pt-1 fontsize08rem " + props.InputLabelClassName
              }
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
          <div className="col-sm-3 d-inline-flex justify-content-center ResponsiveSearch ">
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
      </div>
    );
  }
);
SearchBox.displayName = "SearchBox";
export default SearchBox;
