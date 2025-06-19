import type React from "react";
import { SharedHeader } from "../../components/SharedHeader";
import { CategoryList } from "../../components/CategoryList";
import { ChallengesList } from "../../components/ChallengesList";
import { TrendingCategory } from "../../components/TrendingCategory";
import { CodersList } from "../../components/TopKCodersList";

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen min-w-screen bg-background-100">
      <SharedHeader />
      <div className="flex w-full">
        <div className="flex-2/3 p-5">
          <CategoryList />
          <ChallengesList />
        </div>
        <div className="flex-1/3 p-5">
          <TrendingCategory />
          <CodersList />
        </div>
      </div>
    </div>
  );
};
