import React from "react";
//import { RouterContext } from "next/dist/shared/lib/router-context"; // Import Next.js router context
import type { Preview } from "@storybook/react";
import { RouterContext } from "./NextRouterMock";

// Create a decorator that provides a mock Next.js router
const withNextRouter = (Story: any) => (
  <RouterContext.Provider
    value={{
      route: "/",
      pathname: "/",
      query: {},
      asPath: "/",
      push: () => Promise.resolve(true),
      replace: () => Promise.resolve(true),
      reload: () => {},
      back: () => {},
      prefetch: () => Promise.resolve(),
      beforePopState: () => {},
      events: {
        on: () => {},
        off: () => {},
        emit: () => {},
      },
    }}
  >
    <Story />
  </RouterContext.Provider>
);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withNextRouter],
};

export default preview;
