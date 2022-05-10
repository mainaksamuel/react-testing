import { render, screen, fireEvent } from "@testing-library/react"
import NameInput from '../NameInput'

describe('NameInput', () => {
    beforeEach(() => {
        render(<NameInput />)
    });

    it('will be visible on screen', () => {
        const labelElement = screen.getByText(/first name/i);
        expect(labelElement).toBeVisible();
    });

    it('will be visible on screen', () => {
        const labelElement = screen.queryByText(/first name/i);
        expect(labelElement).toBeVisible();
    });

    it('will be visible on screen', async () => {
        const labelElement = await screen.findByText(/first name/i);
        expect(labelElement).toBeVisible();
    });

    it('should be able to type into input and update its value', () => {
        const inputElement = screen.getByPlaceholderText('Type first name here');
        fireEvent.change(inputElement, { target: { value: 'Samuel' } });
        expect(inputElement.value).toBe('Samuel');
    });


})
