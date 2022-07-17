import { screen } from '@testing-library/react';
import App from '../App';
import render from './utils/render';

describe('Home tests', () => {
  it('should render text "Projects" ', () => {
    render(<App />, ['/projects']);

    expect(screen.getByText(/projects/i)).toBeDefined();
  });
});
