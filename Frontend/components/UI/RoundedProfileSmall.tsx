import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

interface propsType {
  PictureUrl: string;
  Name?: string;
  Username?: string;
  CssClassPic?: string;
  CssClassText?: string;
}

const RoundedProfileSmall: React.FC<propsType> = (props) => {
  return (
    <Card className="ResponsiveProfileSmall shadow bg-transparent h100px">
      <div className="cantainer-fluid conainer-flex  d-flex justify-content-end me-2">
        <div className="row d-inline-flex  align-items-end ImageRow">
          <div className="col row d-flex flex-column h-100">
            <div className="col-12 text-center my-2 ">
              <p className={`${props.CssClassText} ResponsiveName`}>
                {props.Name}
              </p>
            </div>
            <div className="col-12 text-center ">
              <p className={props.CssClassText}>
                <small className="ResponsiveUserLabel">{props.Username}</small>
              </p>
            </div>
          </div>

          <div className="col d-flex justify-content-center w-100 ImageContainer">
            <Image
              id="imgX"
              className={"img-fluid mx-2 rounded-circle" + props.CssClassPic}
              src={props.PictureUrl}
              alt={props.Username}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RoundedProfileSmall;
