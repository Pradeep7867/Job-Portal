import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Badge } from './ui/badge'
import { Avatar, AvatarImage } from "./ui/avatar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Job = () => {
  const navigate = useNavigate();
  const jobId = "ddkjadjkhadjkhajkd";
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 Days Ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      {/* Comapny Logo  */}
      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://w7.pngwing.com/pngs/444/310/png-transparent-amazon-com-amazon-prime-music-streaming-media-prime-now-payment-miscellaneous-text-logo-thumbnail.png" />
          </Avatar>
        </Button>
        {/* Company details  */}
        <div>
          <h1 className="font-md text-lg">Company Name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      {/* Title and Description box */}
      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
          corporis facere, temporibus ratione magnam tempore modi exercitationem
          suscipit assumenda doloremque!
        </p>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <Badge className={'text-blue-700 font-bold'} variant={"ghost"}>12 Positions</Badge>
        <Badge className={'text-[#F83002] font-bold'} variant={"ghost"}>Part Time</Badge>
        <Badge className={'text-[#7209B7] font-bold'} variant={"ghost"}> 12 LPA </Badge>
      </div>
      
      <div className="flex items-center gap-4 mt-4">
        <Button onClick={()=> navigate('/description/${jobId}')} variant="outline"> Details </Button>
        <Button className="bg-[#6A38C2]"> Save for Later </Button>
      </div>
    </div>

  );
};

export default Job;
