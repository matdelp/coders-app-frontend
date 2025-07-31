import React, { useState } from "react";
import { useGetCategoriesQuery } from "../hooks/apiGraphqlRequest";

export const CategoryList: React.FC = () => {
  const [active, setActive] = useState(0);
  const { data, isLoading, error } = useGetCategoriesQuery();

  if (isLoading) return <p>Loading categories...</p>;
  if (error) return <p>Error loading categories.</p>;

  const categories = data?.categories || [];
  return (
    <div className="flex gap-2 p-2 ">
      {categories.map((category, index) => (
        <div
          onClick={() => setActive(index)}
          className={`rounded-md py-2 px-3 cursor-pointer
             ${
               active === index
                 ? "bg-main-300 text-main-100 dark:bg-main-500"
                 : "bg-main-100 text-black hover:bg-main-300 dark:bg-main-300 dark:text-main-100 dark:hover:bg-main-500"
             }`}
          key={index}
        >
          {category.name}{" "}
        </div>
      ))}
    </div>
  );
};
