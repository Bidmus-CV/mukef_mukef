import { Link } from "react-router-dom";
import Button from "../../../atoms/Button";
import Input from "../../../atoms/Input";
import "./LoginModal.scss";

const LoginModal = () => {
  return (
    <div className="modal-wrapper">
      <Input placeholder="Email or phone number" />
      <Input placeholder="Password" type="password" />
      <div className="text-wrap">
        <div className="remember-me">
          <div className="h-6 w-6 bg-gray4"></div>
          <span>Remember me</span>
        </div>
        <a className="forget-passwd cursor-pointer">Forget password ?</a>
      </div>
      <div className="button">
        <Button customClasses="bg-primary text-whitee rounded-md font-medium">
          <Link to="/profile">Login</Link>
        </Button>
      </div>
      <div className="line-container">
        <hr />
        <p>or</p>
        <hr />
      </div>
      <div className="last-text-wrap">
        <p className="text-[#696969] cursor-pointer">Don't have account ?</p>
        <p className="text-primary cursor-pointer">Subscribe now</p>
      </div>
    </div>
  );
};

export default LoginModal;
