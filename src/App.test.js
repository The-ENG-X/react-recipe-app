
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';
import { ThemeProvider, useTheme } from "./ThemeContext";


jest.mock('./components/ThemeContext', () => ({
  ...jest.requireActual('./components/ThemeContext'),
  useTheme: jest.fn(),
  ThemeProvider: ({ children }) => <div>{children}</div>, 
}));

jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => <div>{children}</div>,
}));

// describe('App Component', () => {
//   test('renders header, main content, and footer components', () => {

//     render(<App />);

//     expect(screen.getByTestId('header')).toBeInTheDocument();

//     expect(screen.getByTestId('main')).toBeInTheDocument();

//     expect(screen.getByTestId('footer')).toBeInTheDocument();
//   });
// });
