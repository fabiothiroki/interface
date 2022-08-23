import { renderComponent } from "config/testUtils/renders";
import { expectTextToBeInTheDocument } from "config/testUtils/expects";
import { waitForPromises } from "config/testUtils";
import MainLayout from ".";

jest.mock(
  "config/routes/Navigation",
  () =>
    function () {
      return <p>navigation bar</p>;
    },
);

describe("MainLayout", () => {
  it("renders the children passed", () => {
    renderComponent(
      <MainLayout>
        <div>test</div>
      </MainLayout>,
    );

    expectTextToBeInTheDocument("test");
  });

  it("show navigation when user is logged", () => {
    renderComponent(
      <MainLayout>
        <div>test</div>
      </MainLayout>,
      {
        currentUserProviderValue: {
          signedIn: true,
        },
      },
    );
    expectTextToBeInTheDocument("navigation bar");
  });
});
