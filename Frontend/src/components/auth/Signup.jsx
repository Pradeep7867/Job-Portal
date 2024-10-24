import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "@radix-ui/react-label"; // Assuming Radix UI for Label
import { Input } from "@/components/ui/input"; // Correct Input import if you're using a UI library
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.auth.loading);
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) =>{
      e.preventDefault();
      const formData = new FormData();
      formData.append("fullname", input.fullname);
      formData.append("email", input.email);
      formData.append("phoneNumber", input.phoneNumber);
      formData.append("password", input.password);
      formData.append("role", input.role);
      if(input.file)
      {
        formData.append("file", input.file);
      }
      try {
        dispatch(setLoading(true));
        const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
          headers: {
            "Content-Type" :"multipart/form-data"
          },
          withCredentials : true,
        });
        // Log the response to make sure it's correct
        console.log(res.data);

        if(res.data.success)
        {
          navigate("/login");
          toast.success(res.data.message);
          console.log(res.data.success);
        }
        else {
          toast.error(res.data.message); } // Handle errors (if any)
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
        toast.error("Something went wrong!");
      }
      finally{
        dispatch(setLoading(false));
      }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form onSubmit={submitHandler} className="w-1/2 border-gray-200 rounded-md p-4 my-10">
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>

          <div className="my-2">
            <Label>Full Name</Label>
            <Input
              type="text"
              placeholder="Enter Your Name"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
            />
          </div>

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

          <div className="my-2">
            <Label>Phone Number</Label>
            <Input
              type="text"
              placeholder="Enter Your Phone Number"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeEventHandler}
            />
          </div>

          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="Enter Your Password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
            />
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
            <div className="flex items-center gap-2">
              <Label> Profile</Label>
              <Input
                accept="image/*"
                type="file"
                onChange={changeFileHandler}
                className="cursor-pointer"
              ></Input>
            </div>
          </div>
          <Button type="submit" className="w-full my-4">
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin mr-2" />{" "}
                {/* Spinner */}
                Please Wait
              </>
            ) : (
              "SignUp"
            )}
          </Button>
          <span className="text-sm">
            Already have an account ?{" "}
            <Link to="/login" className="text-blue-600">
              Login{" "}
            </Link>{" "}
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
