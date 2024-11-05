import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Locate, LocateIcon, Mail } from "lucide-react";

const JobDescription = () => {
  const isApplied = false;
  const isSaved = false;
  
  // Define the key skills data
  const skills = [
    { name: "Data Structures & Algorithms", preferred: true },
    { name: "React.js", preferred: true },
    { name: "JavaScript" },
    { name: "HTML & CSS" },
    { name: "TypeScript" },
    { name: "Redux" },
    { name: "RESTful APIs" },
    { name: "Git" },
    { name: "UI/UX Design" },
    { name: "Responsive Design" }
  ];

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">Frontend Developer</h1>
          <div className="flex items-center gap-2 mt-4">
       
            <Badge className={"text-blue-700 font-bold"} variant={"ghost"}>
              Openings : 12
            </Badge>
            <Badge className={"text-[#F83002] font-bold"} variant={"ghost"}>
              Full Time
            </Badge>
            <Badge className={"text-[#7209B7] font-bold"} variant={"ghost"}>
              12 LPA
            </Badge>
            <Badge className={"text-[#dab822] font-bold"} variant={"ghost"}>
              Bangalore
            </Badge>
          </div>
        </div>
        {/* Button Container */}
        <div className="flex gap-2 ">
          {/* Save Option */}
          <Button 
            variant="outline"
            disabled={isSaved}
            className={`rounded-2xl border-2 px-4 py-2 ${
              isSaved
                ? "border-gray-400 text-gray-600 cursor-not-allowed"
                : " border-[#7209B7] text-[#7209B7] hover:border-[#bf81e9] hover:text-[#bf81e9]"
            }`}
          >
            {isSaved ? "Saved" : "Save"}
          </Button>
          
          {/* Apply Option */}
          <Button
            disabled={isApplied}
            className={`rounded-2xl ${
              isApplied
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-[#7209B7] hover:bg-[#bf81e9]"
            }`}
          >
            {isApplied ? "Already Applied" : "Apply Now"}
          </Button>
        </div>
      </div>
      {/* Job Description Box */}
      <h1 className="border-b-2 border-b-gray-300 font-medium py-4">
        Job Description
      </h1>

      {/* Role Description Experience Section */}
      <div className="my-4">
        <h1 className="font-bold my-1">
          Description: <span className="pl-4 font-normal text-gray-800"> We’re looking for a Frontend Developer to create interactive, high-performance web applications, ensuring seamless and responsive user experiences. </span>
        </h1>
        <h1 className="font-bold my-1">
          Role: <span className="pl-4 font-normal text-gray-800"> Frontend Developer </span>
        </h1>
        <h1 className="font-bold my-1">
          Industry Type: <span className="pl-4 font-normal text-gray-800"> Software Development </span>
        </h1>
        <h1 className="font-bold my-1">
          Location: <span className="pl-4 font-normal text-gray-800"> Bangalore </span>
        </h1>
        <h1 className="font-bold my-1">
          Experience: <span className="pl-4 font-normal text-gray-800"> 1+ Year </span>
        </h1>
        <h1 className="font-bold my-1">
          Salary: <span className="pl-4 font-normal text-gray-800"> 1+ Year </span>
        </h1>
        <h1 className="font-bold my-1">
          Total Applicants: <span className="pl-4 font-normal text-gray-800"> 12 </span>
        </h1>
        <h1 className="font-bold my-1">
          Posted Date: <span className="pl-4 font-normal text-gray-800"> 12-09-2024 </span>
        </h1>

        {/* Key Skills Section */}
        <h1 className="font-bold my-1">
          Key Skills:
          <span className="flex font-normal text-xs text-gray-500"> Skills highlighted with '*' are preferred key skills</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {skills.map((skill, index) => (
              <Badge
              variant={"ghost"}
                key={index}
                className={`px-3 py-1 rounded-full border ${
                  skill.preferred ? "border-[#7209B7] text-[#7209B7] font-bold" : "border-gray-300 text-gray-600"
                }
                `}
              >
                {skill.preferred && <span>✨</span>} {skill.name}
              </Badge>
            ))}
          </div>
        </h1>
      </div>
    </div>
  );
};

export default JobDescription;
