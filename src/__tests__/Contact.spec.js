import { screen } from '@testing-library/react';
import App from '../App';
import render from './utils/render';

describe('Home tests', () => {
  it('should render text "Contact" ', () => {
    render(<App />, ['/contact']);
    expect(screen.getByText(/contact/i)).toBeDefined();
  });
});
