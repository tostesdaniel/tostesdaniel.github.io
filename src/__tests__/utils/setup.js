import userEvent from '@testing-library/user-event';
import render from './render';

export default function setup(jsx) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}
