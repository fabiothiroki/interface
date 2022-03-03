import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Switch, Route, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Navigation from ".";

export default {
  title: "Navigation",
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = function () {
  return (
    <Router history={createMemoryHistory()}>
      <Switch>
        <Route path="/" exact>
          <Navigation />
        </Route>
      </Switch>
    </Router>
  );
};

export const Default = Template.bind({});
