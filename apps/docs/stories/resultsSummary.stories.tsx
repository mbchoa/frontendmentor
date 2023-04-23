// Button.stories.ts|tsx

import { ResultsSummary } from "@acme/core/src";
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

const meta: ComponentMeta<typeof ResultsSummary> = {
  title: 'Challenges/Results Summary',
  component: ResultsSummary,
  parameters: {
    layout: 'centered',
  },
}

export default meta;

export const Mobile: ComponentStory<typeof ResultsSummary> = () => (
  <div className="w-[375px]">
    <ResultsSummary />
  </div>
)

export const Desktop: ComponentStory<typeof ResultsSummary> = () => (
  <div className="w-[1440px]">
    <ResultsSummary />
  </div>
)
