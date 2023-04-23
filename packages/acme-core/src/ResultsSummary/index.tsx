import clsx from "clsx";
import { capitalize } from "radash";
import { useCallback } from "react";

import memoryIcon from "./icon-memory.svg";
import reactionIcon from "./icon-reaction.svg";
import verbalIcon from "./icon-verbal.svg";
import visualIcon from "./icon-visual.svg";

export interface IScore {
  type: "reaction" | "memory" | "verbal" | "visual";
  score: number;
}

interface IResultsSummaryProps {
  scores: IScore[];
}

export const ResultsSummary = ({ scores }: IResultsSummaryProps) => {
  return (
    <div className="flex flex-col sm:flex-row bg-transparent bg-red-600 font-outfit">
      <div
        className={clsx(
          "flex flex-col flex-1 items-center",
          "rounded-b-[30px] sm:rounded-[30px]",
          "bg-gradient-to-b from-results-summary-violet-blue to-results-summary-light-royal-blue to-15%",
          "text-center",
          "p-8 space-y-4 sm:space-y-6",
          "text-white"
        )}
      >
        <p className="text-gray-400">Your Result</p>
        <div
          className={clsx(
            "flex flex-col justify-center items-center",
            "w-[130px] h-[130px] sm:w-[150px] sm:h-[150px]",
            "rounded-full",
            "bg-gradient-to-b from-results-summary-cobalt-blue to-transparent shadow-inner",
            "space-y-3"
          )}
        >
          <p className="text-5xl font-bold mt-5">76</p>
          <p className="text-results-summary-light-lavender text-sm opacity-50">
            of 100
          </p>
        </div>
        <section className="space-y-2 max-w-[80%]">
          <p className="font-medium text-xl sm:text-2xl text">Great</p>
          <p className="text-results-summary-light-lavender text-sm">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </section>
      </div>
      <section className="flex-1 bg-white p-6 space-y-6">
        <h2 className="font-bold text-lg">Summary</h2>
        <div className="space-y-4">
          {scores.map((score) => (
            <ScoreItem key={score.type} {...score} />
          ))}
        </div>
        <button
          className={clsx(
            "w-full py-3",
            "rounded-[30px] bg-results-summary-dark-gray-blue hover:opacity-90",
            "text-white font-medium",
            "transition duration-250"
          )}
        >
          Continue
        </button>
      </section>
    </div>
  );
};

const ScoreItem = ({ type, score }: IScore) => {
  const renderIcon = useCallback(() => {
    switch (type) {
      case "reaction":
        return <img src={reactionIcon} alt="Memory Icon" />;
      case "memory":
        return <img src={memoryIcon} alt="Memory Icon" />;
      case "verbal":
        return <img src={verbalIcon} alt="Memory Icon" />;
      case "visual":
        return <img src={visualIcon} alt="Memory Icon" />;
      default:
        throw new Error("Invalid type");
    }
  }, [type]);

  return (
    <div
      className={clsx(
        "flex items-center justify-between p-4 rounded-xl",
        type === "reaction" && "bg-results-summary-light-red bg-opacity-10",
        type === "memory" && "bg-results-summary-orangey-yellow bg-opacity-10",
        type === "verbal" && "bg-results-summary-green-teal bg-opacity-10",
        type === "visual" && "bg-results-summary-cobalt-blue bg-opacity-10"
      )}
    >
      <div
        className={clsx(
          "flex space-x-3 items-center font-semibold",
          type === "reaction" && "text-results-summary-light-red bg-opacity-10",
          type === "memory" &&
            "text-results-summary-orangey-yellow bg-opacity-10",
          type === "verbal" && "text-results-summary-green-teal bg-opacity-10",
          type === "visual" && "text-results-summary-cobalt-blue bg-opacity-10"
        )}
      >
        <span>{renderIcon()}</span>
        <span>{capitalize(type)}</span>
      </div>
      <div className="flex items-center font-semibold">
        <span className="font-bold">{score}</span>
        <span className="before:content-['/'] before:px-1 text-gray-400">
          100
        </span>
      </div>
    </div>
  );
};
