import dateFormat from "dateformat";

interface ParamTypes {
  Date: string | undefined;
  Text: string;
  Format: string;
  CssClass: string;
}

const DateShow = (props: ParamTypes) => {
  const dateArray = dateFormat("2009-04-30T07:05:01Z").split(" ");
  return (
    <div className={props.CssClass}>
      {props.Text +
        " " +
        dateArray[1] +
        "  " +
        dateArray[2] +
        ", " +
        dateArray[3]}
    </div>
  );
};
export default DateShow;
