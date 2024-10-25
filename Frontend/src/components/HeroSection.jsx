import React from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className="py-3 px-4 rounded-full bg-gray-100 text-[#F83002] font-medium inline-block mb-6">
          India’s Dream Career Platform – Made for You
        </span>

        <h3 className="text-5xl font-bold mb-4">
          Target, Apply & Succeed <br />{" "}
          <span className="text-[#6A38C2] font-semibold">
            Aim Higher with Every Opportunity
          </span>
        </h3>
        <p className="text-gray-500">
          You'r one-stop destination for discovering, applying, and landing top
          jobs across industries.
        </p>
        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
          <input
            type="text"
            placeholder="Find your dream jobs"
            onChange={(e) => setQuery(e.target.value)}
            className="outline-none border-none w-full"
          />
          <Button
            className="rounded-r-full bg-[#6A38C2]" >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
