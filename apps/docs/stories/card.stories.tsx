// Button.stories.ts|tsx

import { Card } from "@acme/core/src";
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import image from "../assets/image-qr-code.png";

const meta: ComponentMeta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
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

export const Default: ComponentStory<typeof Card> = () => (
  <Card
    title="Improve your front-end skills by building projects"
    subtitle="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
    image={image}
  />
)
