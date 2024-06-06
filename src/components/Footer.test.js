import Footer from "./Footer";
import {render, screen} from "@testing-library/react";

test('renders footer with correct text', () => {
    render(<Footer />);
    const footerElement = screen.getByText(/© 2024 Recipe App/i);
    expect(footerElement).toBeInTheDocument();
  });