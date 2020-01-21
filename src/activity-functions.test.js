import * as isActive from "./activity-functions";

describe("activity functions", () => {
  let location;

  beforeEach(() => {
    location = {
      pathname: "/"
    };
  });

  it("verifies that the navbar is always active", () => {
    expect(isActive.navbar(location)).toBe(true);
  });

  it("verifies that the clients application is active for correct routes", () => {
    location.pathname = "/";
    expect(isActive.clients(location)).toBe(false);

    location.pathname = "/settings";
    expect(isActive.clients(location)).toBe(false);

    location.pathname = "/clients";
    expect(isActive.clients(location)).toBe(true);
  });
});
