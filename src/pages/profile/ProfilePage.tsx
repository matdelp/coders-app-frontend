import React from "react";
import { useParams } from "react-router-dom";
import { LeaderHeader } from "../../components/LeaderHeader";
import { ProfilePicture } from "../../components/ProfilePicture";
import { ProfileForm } from "../../components/ProfileForm";
import { ChallengesTracker } from "../../components/ChallengesTracker";
import { challenges } from "../../assets/dummyData/challenges";
import { CodingHeatMap } from "../../components/CodingHeatMap";

const addUpperCase = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const ProfilPage: React.FC = () => {
  const { userId } = useParams();
  const renderName = (userId: string | undefined): string => {
    const [firstName = "", lastName = ""] = userId?.split("_") || [];
    return `${addUpperCase(firstName)} ${addUpperCase(lastName)}`;
  };

  return (
    <div className="bg-background-100 min-h-screen">
      <LeaderHeader />
      <div className="p-5 flex gap-3 flex-col">
        <div className="flex xl:flex-row justify-between items-center">
          <ProfilePicture />
          <p className="text-sm bg-gray-200 px-3 py-1 rounded-full self-center">
            Rank: 24
          </p>
        </div>
        <div>{renderName(userId)}</div>
        <ProfileForm />
        <ChallengesTracker data={challenges} />
        <CodingHeatMap />
      </div>
    </div>
  );
};
