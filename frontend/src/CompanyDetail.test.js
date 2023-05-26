import React from "react";
import { render } from "@testing-library/react";
import CompanyDetail from "./CompanyDetail"; "./CompanyDetail";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./testUtils";

it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <UserProvider>
        <CompanyDetail />
      </UserProvider>
    </MemoryRouter>,
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter initialEntries={["/company/ibm"]}>
      <UserProvider>
        <Routes>
          <Route path="/companies/:handle" element={<CompanyDetail />} />
        </Routes>
      </UserProvider>
    </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
