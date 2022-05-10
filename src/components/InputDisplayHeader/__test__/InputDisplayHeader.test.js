import { render, screen } from "@testing-library/react";

import InputDisplayHeader from '../InputDisplayHeader';

it('should render Hello  and the first name of the user', () => {
  render(<InputDisplayHeader firstNameVal={'Samuel'} />);
  const headerElement = screen.getByRole('heading');
  expect(headerElement).toHaveTextContent(/hello, samuel/i);
});
