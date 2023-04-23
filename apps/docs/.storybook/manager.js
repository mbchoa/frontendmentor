// .storybook/manager.js

import { addons } from "@storybook/addons";

if (process.env.CI !== undefined) {
  addons.setConfig({
    showNav: false,
    showPanel: false,
    showToolbar: false,
  });
}
