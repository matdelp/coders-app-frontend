import type React from "react";
import { SharedHeader } from "../../components/SharedHeader";
import { CategoryList } from "../../components/CategoryList";
import { ChallengesList } from "../../components/ChallengesList";
import { TrendingCategory } from "../../components/TrendingCategory";

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen min-w-screen bg-background-100">
      <SharedHeader />
      <div className="grid grid-cols-2 p-2">
        <div className="">
          <CategoryList />
          <ChallengesList />
        </div>
        <div>
          <TrendingCategory />
        </div>
      </div>
    </div>
  );
};
