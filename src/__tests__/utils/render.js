import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

const customRender = (children, initialEntries = ['/']) => (
  render(
    <MemoryRouter initialEntries={initialEntries}>
      {children}
    </MemoryRouter>,
  )
);

export default customRender;
