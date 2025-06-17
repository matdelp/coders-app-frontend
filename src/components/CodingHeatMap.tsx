import React from "react";
import { heatMapData } from "../assets/dummyData/heatmap";
import CalendarHeatmap from "react-calendar-heatmap";
import "../assets/css/heatmap-module.css";

type CodingHeatMapProps = {
  mode: string;
};

export const CodingHeatMap: React.FC<CodingHeatMapProps> = ({ mode }) => {
  const GetColorFromCount = (count: number, mode: string) => {
    if (count < 2) return `color-scale-0-${mode}`;
    if (count >= 2 && count < 4) return `color-scale-2-${mode}`;
    if (count >= 4 && count < 10) return `color-scale-4-${mode}`;
    if (count >= 10 && count < 20) return `color-scale-10-${mode}`;
    if (count >= 20 && count < 30) return `color-scale-20-${mode}`;
    if (count >= 30) return `color-scale-30-${mode}`;
  };

  return (
    <>
      <h2 className="text-center">Your Coding strikes</h2>
      <CalendarHeatmap
        startDate={new Date("2025-01-01")}
        endDate={new Date("2025-12-30")}
        values={heatMapData}
        showWeekdayLabels={true}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          return GetColorFromCount(value.count, mode) || "color-empty";
        }}
      />
    </>
  );
};
