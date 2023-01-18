import dateFormat from "dateformat";

interface ParamTypes {
  Date: string | undefined;
  Text: string;
  Format: string;
  CssClass: string;
}

const DateShow = (props: ParamTypes) => {
  const dateText = dateFormat(props.Date, "mmm dd, yyyy");
  return <div className={props.CssClass}>{props.Text + " " + dateText}</div>;
};
export default DateShow;
