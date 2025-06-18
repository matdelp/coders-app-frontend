import React from "react";

type ProgressBarProps = {
  label: string;
  style: string;
  value: number;
  difficulty: string;
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  style,
  value,
  difficulty,
}) => {
  return (
    <div className="flex flex-col items-center w-full">
      <label htmlFor={difficulty}>
        {label}
      </label>
      <div className="w-full h-4 bg-gray-300 rounded-md overflow-hidden">
        <div className={style} style={{ width: `${value}%` }}>
          {value}%
        </div>
      </div>
    </div>
  );
};
