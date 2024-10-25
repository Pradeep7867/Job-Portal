import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Button } from "./ui/button";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Cloud Engineer",
  "Data Scientist",
  "Data Analyst",
  "FullStack Developer",
  "Accountant",
  "BlockChain Developer",
  "Manager",
  "UI/UX Developer",
];
const CategoryCarousel = () => {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          {category.map((cat, index) => (
            <CarouselItem key={index}>
              {/* We can style the category text as needed */}
              <div className="p-4 bg-gray-200 rounded-lg shadow-md">{cat}</div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
