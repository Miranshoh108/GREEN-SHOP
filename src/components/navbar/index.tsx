import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import { BellOutlined, LoginOutlined, SearchOutlined } from "@ant-design/icons";
import shop from "../../assets/icons/shop.svg";
import { useReduxDispatch } from "../../hooks/useRedux";
import { setModalAuthorizationVisiblty } from "../../redux/modal-slice/idex";
const Navbar = () => {
  const dispatch = useReduxDispatch();
  const { pathname } = useLocation();
  return (
    <header className="w-[90%] m-auto flex items-center justify-between py-5 border-b border-[#a2db1ab]">
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>
      <div className="flex items-center gap-5">
        <h3
          className={`cursor-pointer ${pathname === "/" && "text-[#46a358]"}`}
        >
          Home
        </h3>
        <h3
          className={`cursor-pointer ${
            pathname === "/blogs" && "text-[#46a358]"
          }`}
        >
          Blogs
        </h3>
      </div>
      <div className="flex items-center gap-6">
        <SearchOutlined className="text-[23px]" />
        <BellOutlined className="text-[23px]" />
        <img src={shop} alt="" />
        <button onClick={() => dispatch(setModalAuthorizationVisiblty())} className="w-[100px] h-[35px] bg-[#46a358] text-white rounded-md flex items-center justify-center gap-2">
          <LoginOutlined />
          Login
        </button>
        
      </div>
    </header>
  );
};

export default Navbar;
