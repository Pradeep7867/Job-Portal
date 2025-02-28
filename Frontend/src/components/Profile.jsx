import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import logo from "./NaukriLogo.png";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobsTable from "./AppliedJobsTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";

//const skills = ["Html", "Css", "JavaScript", "React", "Cloud"];
const isResume = true;
const Profile = () => {
  //By default false
  const [open, setOpen] = useState(false);
  const {user} = useSelector(store=>store.auth);
  if (!user) {
    return <div>Loading...</div>; // Show a loading state if user is not available
  }

  return (
    <div>
      <Navbar></Navbar>

      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src={logo} alt="profilephoto"></AvatarImage>
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">{user?.fullname}</h1>
              <p>
                {user?.profile?.bio}
              </p>
            </div>
          </div>
          <Button onClick={()=> setOpen(true)} className="text-right" variant="outline">
            <Pen />
          </Button>
        </div>
         {/* Email Showcase  */}
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>{user?.email}</span>
          </div>
           {/* Phone Number Showcase  */}
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>
        {/* Skills Showcase  */}
        <div className="my-5">
          <h1>Skills</h1>
          <div className="flex items-center gap-1">
            { user?.profile?.skills.length != 0 ? (
              user?.profile?.skills.map((item, index) => <Badge key={index}>{item}</Badge>)
            ) : (
              <span>Skills Not Found</span>
            )}
          </div>
        </div>

        {/* Resume Showcase */}
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {isResume && user.profile?.resumeOriginalName ? (
            <a
              href={user?.profile?.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 w-full hover:underline cursor-pointer"
            >
              {user?.profile?.resumeOriginalName}
            </a>
          ) : (
            <span>Resume Not Found</span>
          )}
        </div>
      </div>
      {/* Applied Jobs  */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="font-bold text-lg my-5"> Applied Jobs </h1>
        {/* Applied Job Table Component */}
        <AppliedJobsTable />
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen}/>
    </div>
  );
};

export default Profile;
