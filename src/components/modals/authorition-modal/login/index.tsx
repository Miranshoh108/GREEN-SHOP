import google from "../../../../assets/icons/google.svg";
import facebook from "../../../../assets/icons/facebook.svg";
import { Form, Input } from "antd";
import { FieldType } from "../../../../@types";
import { useLoginMutate } from "../../../../hooks/useQueryHandler/useQueryActions";
const Login = () => {
  const {mutate} = useLoginMutate()
  const login = (e: FieldType) => {
    mutate(e)
  };
  return (
    <div className="w-[90%] m-auto">
      <p className="pt-4">Enter your username and password to login.</p>
      <Form
      onFinish={login}
        initialValues={{ remember: true }}
        autoComplete="off"
        className=" mt-2 flex flex-col gap-5"
      >
        <Form.Item<FieldType>
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            className=" border-[#eaeaea] h-[40px] hover:border-[#46a358] focus:border-[#46a358]"
            placeholder="muhammadsadullayev6105@gmail.com"
          />
        </Form.Item>
        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            className=" border-[#eaeaea] h-[40px] hover:border-[#46a358] focus:border-[#46a358]"
            placeholder="********"
          />
        </Form.Item>

        <h3 className="text-end text-[#46a358] text-[14px]">
          Forgot Password?
        </h3>
        <button className="bg-[#46a358] w-full h-[48px] rounded-md text-white mt-2 text-[18px] opacity-100">
          Login
        </button>
      </Form>

      <div className=" flex items-center justify-center mt-5 mb-5 gap-4">
        <div className="w-[35%] h-[2px] bg-[#EAEAEA]"></div>
        <div className="w-[40%] text-center text-[#3D3D3D] text-[13px]">
          {" "}
          Or login with
        </div>
        <div className="w-[35%] h-[2px] bg-[#EAEAEA]"></div>
      </div>
      <button className="border h-[40px] rounded-md flex items-center justify-center gap-3 mb-4 cursor-pointer w-full">
        <img src={google} alt="" /> Login with Google
      </button>
      <button className="border h-[40px] rounded-md flex items-center justify-center gap-3 mb-4 cursor-pointer w-full">
        <img src={facebook} alt="" /> Login with Facebook
      </button>
    </div>
  );
};

export default Login;
