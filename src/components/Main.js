// src/components/Main.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

const Main = () => (
  <main className="p-4">
    <Routes>
      <Route path="/" element={<RecipeList />} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />
    </Routes>
  </main>
);

export default Main;
