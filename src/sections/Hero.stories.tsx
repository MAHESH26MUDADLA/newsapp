import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Hero from "./Hero";

export default {
  title: "Components/Hero",
  component: Hero,
  parameters: {
    docs: {
      description: {
        component: "Hero slider component using SwiperJS with autoplay and animations.",
      },
    },
  },
} as Meta<typeof Hero>;

const Template: StoryFn<typeof Hero> = () => <Hero />;

export const Default = Template.bind({});

