import { Image } from "react-bootstrap";
import Org from "../../models/Org";

interface propsType {
  MyOrg?: Org;
}
const OrganizationItem: React.FC<propsType> = (props) => {
  return (
    <div className="col my-2 mx-1 d-inline-flex border border-1 MainBox">
      <Image
        id="imgX"
        className={" align-self-center thumbnail  p-1 w5vw"}
        src={props.MyOrg?.avatar_url}
        alt={props.MyOrg?.login}
      />
      <dl>
        <dt className="w-100 mx-2 justify-content-start mt-1 fontsize1rem">
          {props.MyOrg?.login}
        </dt>
        <dd className="w-100 mx-2 justify-content-start mt-2 fontsize08rem">
          {props.MyOrg?.description}
        </dd>
      </dl>
      {/* <h5 className="w-100 mx-2 justify-content-start">{props.Login}</h5>
      <h5 className="w-100 mx-2 justify-content-start">{props.Login}</h5>
       + */}
    </div>
  );
};
export default OrganizationItem;
