import { screen } from '@testing-library/react';
import render from './utils/render';
import App from '../App';

describe('Header tests', () => {
  it('shoud contain a nav element', () => {
    render(<App />);

    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('should contain a title', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 1, name: /welcome to my porfolio!/i })).toBeInTheDocument();
  });
});
