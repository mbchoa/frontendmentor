import clsx from "clsx";

export const ResultsSummary = () => {
  return (
    <div className="flex flex-col sm:flex-row bg-transparent bg-red-600 font-outfit">
      <div
        className={clsx(
          "flex flex-col items-center",
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
      <div className="bg-white">Summary</div>
    </div>
  );
};
