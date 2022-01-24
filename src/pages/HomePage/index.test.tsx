import React from "react";
import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import userFactory from "config/testUtils/factories/userFactory";
import Home from ".";

describe("Home", () => {
  it("should render without error", () => {
    renderComponent(<Home />, {
      currentUserProviderValue: {
        currentUser: userFactory({ email: "email@email.com" }),
      },
    });
    expectTextToBeInTheDocument("Conectar Carteira");
    expectTextToBeInTheDocument("email@email.com");
  });
});
