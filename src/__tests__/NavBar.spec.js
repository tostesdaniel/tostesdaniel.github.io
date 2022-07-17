import { screen } from '@testing-library/react';
import App from '../App';
import render from './utils/render';
import setup from './utils/setup';
import NavBar from '../components/NavBar';

describe('NavBar tests', () => {
  it('should contain a list', () => {
    render(<NavBar />);

    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('should contain a list with 3 list items', () => {
    render(<NavBar />);

    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  it('should contain links', () => {
    render(<NavBar />);

    expect(screen.getAllByRole('link')).toHaveLength(3);
  });

  it('should test Link\'s text', () => {
    render(<NavBar />);

    const links = screen.getAllByRole('link');
    const linkNames = ['Home', 'Projects', 'Contact'];

    links.forEach((link, i) => {
      expect(link).toHaveTextContent(linkNames[i]);
    });
  });

  it('should test if Link\'s are redirecting correctly', async () => {
    const { user } = setup(<App />);

    const pageContent = ['Home page', 'Projects page', 'Contact page'];

    expect(screen.getByText(/home page/i)).toBeInTheDocument();

    await user.click(screen.getByRole('link', { name: /home/i }));
    expect(await screen.findByText(pageContent[0])).toBeInTheDocument();

    await user.click(screen.getByRole('link', { name: /projects/i }));
    expect(await screen.findByText(pageContent[1])).toBeInTheDocument();

    await user.click(screen.getByRole('link', { name: /contact/i }));
    expect(await screen.findByText(pageContent[2])).toBeInTheDocument();
  });
});
