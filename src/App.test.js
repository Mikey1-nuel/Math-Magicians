import {
  render, screen,
} from '@testing-library/react';
import App from './App';
import Home from './components/homePage';

beforeEach(() => render(<App />));

test('Checks if the title is available on home page', () => {
  const { queryAllByTitle } = render(<Home />);
  const title = queryAllByTitle('Welcome');
  expect(title).toBeTruthy();
});

test('does not render the calculator page', () => {
  expect(() => screen.getByText(/Let's do some math!/i)).toThrowError();
});
