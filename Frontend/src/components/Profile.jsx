import React from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import logo from "./NaukriLogo.png";
import { Button } from "./ui/button";
import { Pen } from "lucide-react";
const Profile = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src={logo} alt="profilephoto"></AvatarImage>
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quaerat, consectetur.
              </p>
            </div>
          </div>
          <Button className="text-right" variant="outline">
            <Pen />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
