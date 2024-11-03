import React from "react";
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from "./ui/label";

const filterData = [
  {
    filterType: "Company Type",
    array: ["Corporate", "Foreign MNC", "Indian MNC", "Startup"],
  },
  {
    filterType: "Location",
    array: [
      "Delhi / NCR",
      "Bangalore",
      "Hyderabad",
      "Jaipur",
      "Ajmer",
      "Mumbai (All Areas)",
      "Navi Mumbai",
      "Mohali",
      "Gurugram",
      "Kolkata",
      "Chennai",
      "Udaipur",
    ],
  },
  {
    filterType: "Industry",
    array: [
      "IT Services & Consulting",
      "Software Product",
      "Medical Services/Hospital",
      "Education Technology",
      "Hardware & Networking",
      "E-learning/EdTech",
      "Automobile",
      "Building Material",
    ],
  },
  {
    filterType: "Department",
    array: [
      "Engineering- Software",
      "Sales & Business",
      "Customer Services",
      "Finance & Accounting",
    ],
  },
  {
    filterType: "Experience",
    array: ["Experienced", "Entry Level", "Students"],
  },
  {
    filterType: "Salary",
    array: ["0-40K", "42K-1 Lakh", "1L - 5 Lakh"],
  },
  {
    filterType: "Job Posting Date",
    array: ["<3 Days", "<7 Days", "<15 Days"],
  },
];

const FilterCard = () => {
  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {
          filterData.map((data, item)=>
          (
            <div>
              {/* Categories */}
              <h1 className="font-bold text-lg">{data.filterType}</h1>
              {
                data.array.map((item, index)=>{
                  return (
                    <div className="flex items-center space-x-2 my-2">
                      <RadioGroupItem value={item} />
                      <Label>{item}</Label>
                    </div>
                  )
                }
              )}
            </div>
          ))
        }
      </RadioGroup>

    </div>
  );
};

export default FilterCard;
