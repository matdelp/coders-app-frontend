import React from "react";
import { useGetCategoriesQuery } from "../hooks/apiGraphqlRequest";

export const TrendingCategory: React.FC = () => {
  const { data, isLoading, error } = useGetCategoriesQuery();

  if (isLoading) return <p>Loading categories...</p>;
  if (error) return <p>Error loading categories.</p>;

  const categories = data?.categories || [];
  return (
    <div className="flex flex-col gap-2 p-2">
      <h2>Trending Categories:</h2>
      <div className="flex gap-5 flex-wrap">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-main-100 dark:bg-main-300 rounded-xl flex gap-1 p-2 items-center"
          >
            {category.name}{" "}
            <p className="bg-green-500 dark:bg-green-800 rounded-lg flex text-xs p-1">
              {" "}
              {category.count}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
