// Button.stories.ts|tsx

import { ResultsSummary } from "@acme/core/src";
import { IScore } from "@acme/core/src/ResultsSummary";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

const meta: ComponentMeta<typeof ResultsSummary> = {
  title: "Challenges/Results Summary",
  component: ResultsSummary,
  parameters: {
    layout: "centered",
  },
};

export default meta;

const scores: IScore[] = [
  {
    type: "reaction",
    score: 80,
  },
  {
    type: "memory",
    score: 92,
  },
  {
    type: "verbal",
    score: 61,
  },
  {
    type: "visual",
    score: 72,
  },
];

export const Mobile: ComponentStory<typeof ResultsSummary> = () => (
  <ResultsSummary scores={scores} />
);
