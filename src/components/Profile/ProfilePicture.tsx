import React, { useRef, useState } from "react";
import userPlaceholder from "../../assets/images/userPlaceholder.jpg";
import { FaPen } from "react-icons/fa";

export const ProfilePicture = () => {
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const refImg = useRef<HTMLInputElement>(null);

  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const newImgUrl = URL.createObjectURL(file);
      setImgUrl(newImgUrl);
    }
  };
  const handleEditClick = () => {
    refImg.current?.click();
  };

  return (
    <div className="flex justify-between">
      <div className="flex w-20 h-20 relative">
        <img
          className="rounded-full object-cover w-20 h-20"
          src={imgUrl || userPlaceholder}
          alt="User avatar"
        />
        <button onClick={handleEditClick}>
          <FaPen className="absolute bottom-0 right-0 w-3 h-3 text-gray-500 cursor-pointer" />
        </button>
        <input
          type="file"
          accept="image/*"
          ref={refImg}
          onChange={handleImgChange}
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
};
