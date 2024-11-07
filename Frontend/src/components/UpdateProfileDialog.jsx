import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useSelector } from "react-redux";

const UpdateProfileDialog = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth);

  const [input, setInput] = useState({
    fullname: user?.fullname,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    bio: user?.profile?.bio,
    skills: user?.profile?.skills?.map((skill) => skill),
    file: user?.profile?.resume,
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler =(e)=> {
    e.preventDefault();
    console.log(input);
  }
  const fileChangeHandler = (e)=> {
    const file = e.target.files?.[0];
    setInput({...input, file})
  }

  return (
    <div>
      <Dialog open={open}>
        <DialogContent
          className="sm:max-w-[425px]"
          onInteractOutside={() => setOpen(false)}
        >
          <DialogHeader>
            <DialogTitle> Update Profile </DialogTitle>
          </DialogHeader>
          <form onSubmit={submitHandler}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  className="col-span-3"
                  value={input.fullname}
                ></Input>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  className="col-span-3"
                  value={input.email}
                  onChange={changeEventHandler}
                ></Input>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="number" className="text-right">
                  Phone Number
                </Label>
                <Input
                  id="number"
                  name="number"
                  type="number"
                  className="col-span-3"
                  value={input.phoneNumber}
                  onChange={changeEventHandler}
                ></Input>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className="text-right">
                  Bio
                </Label>
                <Input
                  id="bio"
                  name="bio"
                  type="text"
                  className="col-span-3"
                  value={input.bio}
                  onChange={changeEventHandler}
                ></Input>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="skills" className="text-right">
                  Skills
                </Label>
                <Input
                  id="skills"
                  name="skills"
                  type="text"
                  className="col-span-3"
                  value={input.skills}
                  onChange={changeEventHandler}
                ></Input>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <resumeabel htmlFor="file" className="text-right">
                  Resume
                </resumeabel>
                <Input
                  type="file"
                  accept="application/pdf"
                  id="file"
                  name="file"
                  className="col-span-3"
                  onChange={fileChangeHandler}
                ></Input>
              </div>
            </div>
            <DialogFooter>
              {
                <Button
                  type="submit"
                  className="w-full my-4"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />{" "}
                      {/* Spinner */}
                      Please Wait
                    </>
                  ) : (
                    "Update"
                  )}
                </Button>
              }
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateProfileDialog;
