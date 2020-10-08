import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders index page', () => {
  const { getByText } = render(<App />);
  const pageTitle = getByText(/Movie Search App/i);
  expect(pageTitle).toBeInDocument();
});

