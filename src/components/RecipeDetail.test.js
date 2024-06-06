
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import RecipeDetail from './RecipeDetail';

describe('RecipeDetail', () => {
  test('renders recipe details correctly', async () => {
    const recipeData = {
      id: '1',
      name: 'Test Recipe',
      ingredients:'Ingredient 1',
      steps: 'Step 1',
      image: 'test.jpg'
    };

    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(recipeData)
        })
      );
    render(
      <MemoryRouter initialEntries={['/recipes/1']}>
        <Routes>
            <Route path="/recipes/:id" element={<RecipeDetail />} />    
        </Routes>
      </MemoryRouter>
    );

    const recipeName = await screen.findByText('Test Recipe');
    const ingredients = screen.getByText('Ingredients');
    const steps = screen.getByText('Steps');

    expect(recipeName).toBeInTheDocument();
    expect(ingredients).toBeInTheDocument();
    expect(steps).toBeInTheDocument();
    expect(screen.getByAltText('Test Recipe')).toBeInTheDocument();
    expect(screen.getByText('Ingredient 1')).toBeInTheDocument();
    expect(screen.getByText('Step 1')).toBeInTheDocument();
  });
});
