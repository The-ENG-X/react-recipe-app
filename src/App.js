import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { ThemeProvider } from './components/ThemeContext';

const App = () => (
  <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow pb-16">
        <Main />
        </div>
        <Footer />
      </div>
    </Router>
  </ThemeProvider>
);

export default App;
