import { screen, render, fireEvent } from '@testing-library/react';
import CountContainer from "../CountContainer";

describe('It displays the count component', () => {
  beforeEach(() => {
    render(<CountContainer />);
  });

  it('it displays the count header with value 0 on initial render', () => {
    const headerElement = screen.getByRole('heading');
    expect(headerElement).toHaveTextContent(/the count is 0/i);
  });

  it('it increments by one when + button is clicked', () => {
    const incrementBtn = screen.getByText('+');
    fireEvent.click(incrementBtn);
    const headerElement = screen.getByRole('heading');
    expect(headerElement).toHaveTextContent(/the count is 1/i);
  });

  it('it increments by 5 when + button is clicked 5 times', () => {
    const incrementBtn = screen.getByText('+');
    for (let i = 1; i <= 5; i++) fireEvent.click(incrementBtn);
    const headerElement = screen.getByRole('heading');
    expect(headerElement).toHaveTextContent(/the count is 5/i);
  });

  it('it decrements by one when - button is clicked', () => {
    const decrementBtn = screen.getByText('-');
    fireEvent.click(decrementBtn);
    const headerElement = screen.getByRole('heading');
    expect(headerElement).toHaveTextContent(/the count is -1/i);
  });

  it('it decrements by 5 when - button is clicked 5 times', () => {
    const decrementBtn = screen.getByText('-');
    for (let i = 1; i <= 5; i++) fireEvent.click(decrementBtn);
    const headerElement = screen.getByRole('heading');
    expect(headerElement).toHaveTextContent(/the count is -5/i);
  });
});
