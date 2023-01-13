import Org from "../../models/Org";
import OrganizationItem from "./OrganizationItem";

interface propsType {
  MyOrgs?: Org[];
}
const Organizations: React.FC<propsType> = (props) => {
  const orgs = [
    {
      avatarUrl: "https://avatars.githubusercontent.com/u/7966854?v=4",
      Login: "tom-lang",
      desc: "Tom's Obvious, Minimal Language (and friends)",
    },
    {
      avatarUrl: "https://avatars.githubusercontent.com/u/7966854?v=4",
      Login: "tom-lang",
      desc: "Tom's Obvious, Minimal Language (and friends)",
    },
  ];
  return (
    <div className="row d-flex flex-column w-100">
      {props.MyOrgs &&
        props.MyOrgs?.map((org) => (
          <OrganizationItem
            key={org.id}
            MyOrg={org}
            // description={org.description}
            // login={org.login}
            // avatar_url={org.avatar_url}
          ></OrganizationItem>
        ))}
    </div>
  );
};
export default Organizations;
