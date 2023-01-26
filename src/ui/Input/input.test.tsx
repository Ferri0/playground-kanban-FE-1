import React from 'react';
import { render, screen } from '@testing-library/react';

import Input from './input';

describe('Test Input UI component', () => {
    const LABEL_TEXT = 'Test label text';
    const PLACEHOLDER_TEXT = 'test placeholder text';

    let inputElement: HTMLElement | null = null;
    let labelElement: HTMLElement | null = null;

    beforeAll(() => {
        render(<Input label={LABEL_TEXT} placeholder={PLACEHOLDER_TEXT} />);

        inputElement = screen.getByTestId('input');
        labelElement = screen.getByTestId('label');
    });

    it('Label element should be present in document', () => {
        expect(labelElement).toBeInTheDocument();
    });

    it('Input element should be present in document', () => {
        expect(labelElement).toContainElement(inputElement);
    });

    it('Label element should have correct text', () => {
        expect(labelElement).toHaveTextContent(LABEL_TEXT);
    });

    it('Input element should have correct placeholder text', () => {
        expect(inputElement).toHaveAttribute('placeholder', PLACEHOLDER_TEXT);
    });
});
