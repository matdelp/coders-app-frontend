import React from "react";
import { useParams } from "react-router-dom";
import { LeaderHeader } from "../../components/LeaderHeader";
import { ProfilPicture } from "../../components/ProfilPicture";

const addUpperCase = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const ProfilPage: React.FC = () => {
  const { userId } = useParams();
  const renderName = (userId: string | undefined): string => {
    const [firstName = "", lastName = ""] = userId?.split("_") || [];
    return `${addUpperCase(firstName)} ${addUpperCase(lastName)}`;
  };

  return (
    <>
      <LeaderHeader />
      <div className="p-5 flex gap-3 flex-col">
        <div className="flex xl:flex-row justify-between items-center">
          <ProfilPicture />
          <p className="text-sm bg-gray-200 px-3 py-1 rounded-full self-center">
            Rank: 24
          </p>
        </div>
        <div>{renderName(userId)}</div>
        <div>form</div>
        <div>challenge</div>
        <div>coding strike</div>
      </div>
    </>
  );
};
