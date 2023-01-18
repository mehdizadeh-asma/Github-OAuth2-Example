import Org from "../../models/Org";
import OrganizationItem from "./OrganizationItem";

interface propsType {
  MyOrgs?: Org[];
}

const Organizations: React.FC<propsType> = (props) => {
  return (
    <div className="row d-flex flex-column w-100">
      {props.MyOrgs &&
        props.MyOrgs?.map((org) => (
          <OrganizationItem
            key={org.id}
            MyOrg={org}
          ></OrganizationItem>
        ))}
    </div>
  );
};
export default Organizations;
