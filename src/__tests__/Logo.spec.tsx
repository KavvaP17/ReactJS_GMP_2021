import React from 'react';
import { render } from '@testing-library/react';
import { Logo } from '../components/Logo';

describe('Logo', () => {
    it('renders Logo snapshot', () => {
        const {asFragment } = render( <Logo />);

        expect(asFragment()).toMatchSnapshot();
    });

    it('should contain the required text', () => {
        const {queryByText } = render( <Logo />);

        expect(queryByText(/netflix/i)).toBeTruthy();
        expect(queryByText(/roulette/i)).toBeTruthy();

    });
})
