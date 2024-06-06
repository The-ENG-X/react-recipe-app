import { Route, Routes } from 'react-router-dom';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';
import { useTheme } from './ThemeContext';


const Main = () => {

  const { theme } = useTheme;
  return (  
  <main className={`p-4 ${theme}`}>
    <Routes>
      <Route path="/" element={<RecipeList />} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />
    </Routes>
  </main>
  )};
export default Main;
