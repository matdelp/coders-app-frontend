import type React from "react";
import { SharedHeader } from "../../components/SharedHeader";
import { CategoryList } from "../../components/CategoryList";

export const HomePage: React.FC = () => {
  return (
    <div>
      <SharedHeader />
      <CategoryList/>
    </div>
  );
};
