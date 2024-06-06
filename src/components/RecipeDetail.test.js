// RecipeDetail.test.js
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import RecipeDetail from './RecipeDetail';

describe('RecipeDetail', () => {
  test('renders recipe details correctly', async () => {
    const recipeData = {
      id: '1',
      name: 'Test Recipe',
      ingredients: ['Ingredient 1', 'Ingredient 2'],
      steps: ['Step 1', 'Step 2'],
      image: 'test.jpg'
    };

    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: async () => recipeData,
    });

    render(
      <MemoryRouter initialEntries={['/recipes/1']}>
        <Route path="/recipes/:id">
          <RecipeDetail />
        </Route>
      </MemoryRouter>
    );

    // Wait for the recipe details to load
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
  global.fetch.mockRestore();
});
