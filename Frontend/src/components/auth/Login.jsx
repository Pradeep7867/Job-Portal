import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "@radix-ui/react-label"; // Assuming Radix UI for Label
import { Input } from "@/components/ui/input"; // Correct Input import if you're using a UI library
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  
    const [input, setInput] = useState({
      email: "",
      password: "",
      role: "",
    });

    const changeEventHandler = (e)=> {
      setInput({...input, [e.target.name]:e.target.value});
    }
    const submitHandler = async (e) =>{
      e.preventDefault();
      
      try {
        const res = await axios.post(`${USER_API_END_POINT}/login`, formData, {
          headers: {
            "Content-Type" :"application/json"
          },
          withCredentials : true,
        });

        if(res.data.sucess)
        {
          navigate("/");
          toast.success(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      }
  }
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form onSubmit={submitHandler} className="w-1/2 border-gray-200 rounded-md p-4 my-10">
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
          </div>
          <Button type="submit" className="w-full my-4">Login</Button>
          <span className="text-sm">Don't have an account ? <Link to="/signup" className="text-blue-600">SignUp </Link> </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
