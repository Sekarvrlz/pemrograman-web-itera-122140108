import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// Mock komponen untuk fokus pada routing
jest.mock('./components/Header', () => () => <div>Header Component</div>);
jest.mock('./components/Footer', () => () => <div>Footer Component</div>);
jest.mock('./pages/Home', () => () => <div>Home Page</div>);
jest.mock('./pages/Stats', () => () => <div>Stats Page</div>);

describe('App Routing', () => {
  test('renders Header and Footer on all routes', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Header Component')).toBeInTheDocument();
    expect(screen.getByText('Footer Component')).toBeInTheDocument();
  });

  test('renders Home component on route "/"', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });

  test('renders Stats component on route "/stats"', () => {
    render(
      <MemoryRouter initialEntries={['/stats']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Stats Page')).toBeInTheDocument();
  });
});
