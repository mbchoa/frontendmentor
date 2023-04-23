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
  decorators: [
    (Story) => (
      <div className="w-[375px]">
        <Story />
      </div>
    ),
  ]
}

export default meta;

export const Default: ComponentStory<typeof ResultsSummary> = () => (
  <ResultsSummary />
)
