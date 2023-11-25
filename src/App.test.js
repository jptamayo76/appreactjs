import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // Se comenta por error en Test
  // const linkElement = screen.getByText(/learn react/i);

  const linkElement = screen.getByText(/Buscar Personajes/i);
  expect(linkElement).toBeInTheDocument();
});
