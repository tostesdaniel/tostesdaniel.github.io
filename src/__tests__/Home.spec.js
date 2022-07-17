import { screen } from '@testing-library/react';
import App from '../App';
import render from './utils/render';

describe('Home tests', () => {
  it('should render text "Home" ', () => {
    render(<App />);

    expect(screen.getByText(/home/i)).toBeDefined();
  });
});
