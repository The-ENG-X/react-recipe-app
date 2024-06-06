import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext";
import { Sun, Moon } from 'lucide-react'; 

const Header = () => {

  const { theme, toggleTheme } = useTheme();

  return(
  <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
    <nav>
      <Link to="/" className="text-white">
        Home
      </Link>
    </nav>
    <button onClick={toggleTheme} className="p-2 rounded-full">
        {theme === 'light' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
    </button>
  </header>
)};

export default Header;
