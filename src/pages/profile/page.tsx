import React from "react";
import { useParams } from "react-router-dom";
import { SharedHeader } from "../../components/SharedHeader";
import { ProfilePicture } from "../../components/Profile/ProfilePicture";
import { ChallengesTracker } from "../../components/Profile/ChallengesTracker";
import { challenges } from "../../assets/dummyData/challenges";
import { CodingHeatMap } from "../../components/Profile/CodingHeatMap";
import { ProfileForm } from "../../components/Profile/ProfileForm";
import useThemeStore from "../../store/useThemeStore";

const addUpperCase = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const ProfilPage: React.FC = () => {
  const { theme } = useThemeStore();
  const { userId } = useParams();
  const renderName = (userId: string | undefined): string => {
    const [firstName = "", lastName = ""] = userId?.split("_") || [];
    return `${addUpperCase(firstName)} ${addUpperCase(lastName)}`;
  };

  return (
    <div className="bg-background-100 dark:bg-main-700 dark:text-main-100 font-semibold xl:text-xl min-h-screen min-w-screen">
      <SharedHeader />
      <div className="p-5 flex gap-5 flex-col xl:flex-row w-full">
        <div className="flex flex-2 flex-col gap-5 p-5">
          <div className="flex xl:flex-row justify-between items-center">
            <ProfilePicture />
            <p className="text-xl xl:text-2xl bg-gray-200 dark:bg-transparent px-3 py-1 rounded-full self-center">
              Rank: 24
            </p>
          </div>
          <div className="xl:text-4xl text-2xl xl:py-5 py-3">
            {renderName(userId)}
          </div>
          <ProfileForm />
        </div>
        <div className="flex flex-col flex-1 gap-4 xl:gap-6">
          <ChallengesTracker data={challenges} />
          <CodingHeatMap mode={theme} />
        </div>
      </div>
    </div>
  );
};

//TO DO: set up toggle for Light to Dark instead of hardcodding mode to "dark"
