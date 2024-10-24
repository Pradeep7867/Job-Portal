import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "@radix-ui/react-label"; // Assuming Radix UI for Label
import { Input } from "@/components/ui/input"; // Correct Input import if you're using a UI library
import { RadioGroup } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  // State to toggle password visibility
  const [passwordVisible, setPasswordVisible] = useState(false);
  //navigation Object
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    if (!input.role) {
      toast.error("Please select a role.");
      return;
    }

    try {
      dispatch(setLoading(true));
      const res = await axios.post(
        `${USER_API_END_POINT}/login`,
        input, // Send the input object directly
        { withCredentials: true }
      );

      if (res.data.success) {
        navigate("/");
        toast.success(res.data.message);
        console.log(res.data.success);
      } else {
        toast.error("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Login</h1>
          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Enter Your Email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
            />
          </div>

          <div className="my-2 relative">
            <Label>Password</Label>
            <Input
              type={passwordVisible ? "text" : "password"} // Toggle input type
              placeholder="Enter Your Password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              className="pr-10"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-9 text-sm text-gray-500 bg-transparent p-1"
              style={{ fontSize: "12px" }}
            >
              {passwordVisible ? "Hide" : "Show"} {/* Toggle button text */}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role == "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <Label htmlFor="option-one" className="text-black">
                  Student
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role == "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <Label htmlFor="option-two" className="text-black">
                  Recruiter
                </Label>
              </div>
            </RadioGroup>
          </div>
          <Button type="submit" className="w-full my-4" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin mr-2" />{" "}
                {/* Spinner */}
                Please Wait
              </>
            ) : (
              "Login"
            )}
          </Button>
          <span className="text-sm">
            Don't have an account ?{" "}
            <Link to="/signup" className="text-blue-600">
              SignUp{" "}
            </Link>{" "}
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
