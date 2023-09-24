import { LOGO } from "../utils/constants";
const Header = () => {
  return (
    <div className="header">
      <img src={LOGO} alt="dfd" height={100} width={200} />
      <ul>
        <li>Search</li>
        <li>Offers</li>
        <li>Help</li>
        <li>Sign In</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
