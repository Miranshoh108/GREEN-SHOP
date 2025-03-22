import { Modal } from "antd";
import Login from "./login";
import { useState } from "react";
import Register from "./registor";
import { useReduxDispatch, useReduxSelector } from "../../../hooks/useRedux";
import { setModalAuthorizationVisiblty } from "../../../redux/modal-slice/idex";

const AuthorizationModal = () => {
  const { modalAuthorizationVisiblty } = useReduxSelector(
    (state) => state.modalSlice
  );
  const [active, setActive] = useState(true);
  const dispatch = useReduxDispatch();
  return (
    <Modal open={modalAuthorizationVisiblty} onCancel={() => dispatch(setModalAuthorizationVisiblty())} footer={false}>
      <div className="flex items-center justify-center gap-7 mt-7">
        <h3
          onClick={() => setActive(true)}
          className={`text-[20px] !font-[700px] cursor-pointer ${
            active && "text-[#46a358]"
          }`}
        >
          Login
        </h3>
        <div className="w-[1px] h-[20px] bg-[#000]"></div>
        <h3
          onClick={() => setActive(false)}
          className={`text-[20px] !font-[700px] cursor-pointer ${
            !active && "text-[#46a358]"
          }`}
        >
          Register
        </h3>
      </div>
      {active ? <Login /> : <Register />}
    </Modal>
  );
};

export default AuthorizationModal;
