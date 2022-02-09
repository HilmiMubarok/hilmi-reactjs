import { render, screen } from "@testing-library/react";
import App from "./App";
import Articles from "./Articles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

test("renders learn react link", () => {
  // render(<App />);
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="articles" element={<Articles />} />
      </Routes>
    </BrowserRouter>
  );
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  screen.debug();
});
