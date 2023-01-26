import React from 'react';
import { render, screen } from '@testing-library/react';

import Button from './button';

describe('Test Button UI component', () => {
    let buttonElement: HTMLElement | null = null;

    beforeAll(() => {
        render(<Button />);

        buttonElement = screen.getByTestId('button-component');
    });

    it('Button element should be present in document', () => {
        expect(buttonElement).toBeInTheDocument();
    });

    it('Button element should have correct text content', () => {
        expect(buttonElement).toHaveTextContent(/hello/i);
    });
});
