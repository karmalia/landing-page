import { useEffect, useRef, useState } from "react";
import { ProgressBarKnob } from "./ProgressBarKnob";

import { DEFAULT_PROGRESS_KNOB_WIDTH } from "./constants";
import { cn } from "@/utils/utils";

interface SteamProgressBarProps {
  progressPercentage: number;
  onPercentageChange?: (percentage: number) => void;
  className?: string;
}

const calculatePercentageWidth = (
  progressPercentage: number,
  containerWidth: number
) => {
  if (progressPercentage > 0 && containerWidth > 0) {
    const percentageWidth = Math.floor(
      (containerWidth / 100) * progressPercentage
    );

    if (percentageWidth > containerWidth) {
      return containerWidth;
    }
    return percentageWidth;
  }
  return 0;
};

const calculateKnobCount = (
  percentageWidth: number,
  knobWidth = DEFAULT_PROGRESS_KNOB_WIDTH
) => {
  console.log("percentageWidth: ", percentageWidth);
  console.log("knobWidth: ", knobWidth);

  const remainingWidth = percentageWidth % (knobWidth + 6);
  console.log("remainingWidth: ", remainingWidth);

  if (percentageWidth && knobWidth) {
    return Math.floor(percentageWidth / (DEFAULT_PROGRESS_KNOB_WIDTH + 6));
  }
  return 0;
};

function CustomSteamProgressBar({
  progressPercentage,
  onPercentageChange,
  className,
}: SteamProgressBarProps) {
  const progressContainerRef = useRef<HTMLDivElement>(null);
  const [renderedKnobCount, setRenderedKnobCount] = useState(0);
  const [knobCount, setKnobCount] = useState(0);

  const baseClass = `bg-trachery h-10 font-steam antialiased text-sm rounded-none px-1 flex items-center gap-[6px]`;

  const staticBorder = `
              hover:bg-trachery overflow-hidden
              border-t-2 border-t-slate-900 
              border-l-2 border-l-slate-950 
              border-r-2 border-r-slate-400 
              border-b-2 border-b-slate-500
              text-white outline-none ring-none focus:ring-0 focus:outline-none`;

  const classConcat = `${baseClass} ${staticBorder}`;

  useEffect(() => {
    if (progressContainerRef.current) {
      const percentageContainingWidth = calculatePercentageWidth(
        progressPercentage,
        progressContainerRef.current.clientWidth
      );
      const possibleKnobCount = calculateKnobCount(percentageContainingWidth);
      setKnobCount(possibleKnobCount);
    }
  }, [progressPercentage]);

  useEffect(() => {
    if (renderedKnobCount < knobCount) {
      const interval = setInterval(() => {
        setRenderedKnobCount((prevCount) => {
          if (prevCount < knobCount) {
            onPercentageChange && onPercentageChange(prevCount + 1);
            return prevCount + 1;
          } else {
            clearInterval(interval);
            return prevCount;
          }
        });
      }, 200);

      return () => clearInterval(interval);
    }
  }, [knobCount, renderedKnobCount]);

  return (
    <div className={cn(classConcat, className)} ref={progressContainerRef}>
      {Array(renderedKnobCount).fill(<ProgressBarKnob />)}
    </div>
  );
}

export default CustomSteamProgressBar;
