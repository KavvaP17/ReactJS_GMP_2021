import React from 'react';
import { render } from '@testing-library/react';
import { AddMovieModal } from '../components/AddMovieModal';

const propsMock = {
    addMovie: jest.fn(),
    closeModal: jest.fn()
}

const InputMock = (): JSX.Element => <></>;
const DatePickerFieldMock = (): JSX.Element => <></>;
const MultiSelectMock = (): JSX.Element => <></>;
const ButtonMock = (): JSX.Element => <></>;


jest.mock('../components/Input', () => ({Input: InputMock}));
jest.mock('../components/DatePickerField', () => ({DatePickerField: DatePickerFieldMock}));
jest.mock('../components/MiltiSelect', () => ({MultiSelect: MultiSelectMock}));
jest.mock('../components/Button', () => ({Button: ButtonMock}));


describe('AddMovieModal', () => {
    it('should contain the required field', () => {
        const {queryByText } = render(
            <AddMovieModal addMovie={propsMock.addMovie} closeModal={propsMock.closeModal} />
        );

        expect(queryByText(/add movie/i)).toBeTruthy();
        expect(queryByText(/title/i)).toBeTruthy();
        expect(queryByText(/release date/i)).toBeTruthy();
        expect(queryByText(/movie url/i)).toBeTruthy();
        expect(queryByText(/genre/i)).toBeTruthy();
        expect(queryByText(/overview/i)).toBeTruthy();
        expect(queryByText(/runtime/i)).toBeTruthy();
    });
})
