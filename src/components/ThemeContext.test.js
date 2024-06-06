import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { ThemeProvider, useTheme } from "./ThemeContext";

jest.mock("./ThemeContext", () => ({
  ...jest.requireActual("./ThemeContext"),
  useTheme: jest.fn(),
}));

describe("ThemeProvider", () => {
  beforeEach(() => {
    useTheme.mockReset();
  });

  it("renders children with light theme by default", () => {
    useTheme.mockReturnValue({ theme: "light", toggleTheme: jest.fn() });

    const { container } = render(
      <ThemeProvider>
        <div>Test Content</div>
      </ThemeProvider>
    );

    expect(container).toHaveClass("light");
  });

  it("renders children with dark theme when theme is toggled", () => {
    const toggleThemeMock = jest.fn();
    useTheme.mockReturnValue({ theme: "dark", toggleTheme: toggleThemeMock });

    const { container } = render(
      <ThemeProvider>
        <div>Test Content</div>
      </ThemeProvider>
    );

    expect(container).toHaveClass("dark");
  });

  it("calls toggleTheme when child component is clicked", () => {
    const toggleThemeMock = jest.fn();
    useTheme.mockReturnValue({ theme: "light", toggleTheme: toggleThemeMock });

    render(
      <ThemeProvider>
        <button>Toggle Theme</button>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText("Toggle Theme"));
    expect(toggleThemeMock).toHaveBeenCalledTimes(1);
  });
});
