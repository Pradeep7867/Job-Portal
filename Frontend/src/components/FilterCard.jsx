import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
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
      "Ahemdabad",
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
  const [openFilters, setOpenFilters] = useState([]);

  const toggleFilter = (filterType) => {
    setOpenFilters((prevOpenFilters) =>
      prevOpenFilters.includes(filterType)
        ? prevOpenFilters.filter((type) => type !== filterType) // Close the filter if it's open
        : [...prevOpenFilters, filterType] // Open the filter if it's closed
    );
  };

  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      {filterData.map((data, index) => (
        <div key={index} className="mt-4">
          <div
            onClick={() => toggleFilter(data.filterType)}
            className="flex justify-between items-center cursor-pointer"
          >
            <h2 className="font-bold text-lg">{data.filterType}</h2>
            <span>{openFilters.includes(data.filterType) ? "-" : "+"}</span>
          </div>
          {openFilters.includes(data.filterType) && (
            <div className="mt-2">
              <RadioGroup>
                {data.array.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 my-2">
                    <RadioGroupItem value={item} />
                    <Label>{item}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FilterCard;
