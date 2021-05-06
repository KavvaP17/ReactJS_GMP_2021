import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AddMovieModal } from '../components/AddMovieModal';

const propsMock = {
    addMovie: jest.fn(),
    closeModal: jest.fn()
}

type Props = {
    [key: string]: any
}

const InputMock = ({changeHandler}: Props): JSX.Element => (
    <input onChange={changeHandler} role='textbox'/>);
const DatePickerFieldMock = (): JSX.Element => <></>;
const MultiSelectMock = ({changeHandler}: Props): JSX.Element => (
    <select data-testid='select-multiple' onChange={changeHandler}>
        <option data-testid='select-option' value='1'>1</option>
    </select>
);
const ButtonMock = ({clickHandler, type, title}: Props): JSX.Element => (
    <button onClick={clickHandler} type={type}>{title}</button>
);
const formikMock = {
    useFormik: () => ({
        values: {},
        touched: {},
        errors: {},
        setValues: jest.fn(),
        handleChange: jest.fn(),
        handleSubmit: jest.fn()
    }
)};

jest.mock('../components/Input', () => ({Input: InputMock}));
jest.mock('../components/DatePickerField', () => ({DatePickerField: DatePickerFieldMock}));
jest.mock('../components/MiltiSelect', () => ({MultiSelect: MultiSelectMock}));
jest.mock('../components/Button', () => ({Button: ButtonMock}));
jest.mock('formik', () => formikMock);

describe('AddMovieModal', () => {

    test('should contain the required field', () => {
        jest.spyOn(formikMock, 'useFormik').mockReturnValue({
            values: {},
            touched: {},
            errors: {},
            setValues: jest.fn(),
            handleChange: jest.fn(),
            handleSubmit: jest.fn()
        });
        const { queryByText } = render(
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

    test('do not show error messages if values correct', async () => {
        jest.spyOn(formikMock, 'useFormik').mockReturnValue({
            values: {
                title: 'title',
                release_date: new Date(),
                poster_path: 'poster_path',
                genres: ['genres1'],
                overview: 'overview',
                runtime: 1
            },
            touched: {},
            errors: {},
            setValues: jest.fn(),
            handleChange: jest.fn(),
            handleSubmit: jest.fn()
        });

        const { queryAllByRole } = render(
            <AddMovieModal addMovie={propsMock.addMovie} closeModal={propsMock.closeModal} />
        );

        expect(queryAllByRole(/alert/i).length).toBe(0);
    });

    test('do not show error messages if values not correct and fields not touched', async () => {
        jest.spyOn(formikMock, 'useFormik').mockReturnValue({
            values: {
                title: 'title',
                release_date: new Date(),
                poster_path: 'poster_path',
                genres: ['genres1'],
                overview: 'overview',
                runtime: 1
            },
            touched: {},
            errors: {
                title: 'title error',
                release_date: 'date error',
                poster_path: 'poster_path error',
                genres: 'genres1 error',
                overview: 'overview error',
                runtime: 'runtime error'
            },
            setValues: jest.fn(),
            handleChange: jest.fn(),
            handleSubmit: jest.fn()
        });

        const { queryAllByRole } = render(
            <AddMovieModal addMovie={propsMock.addMovie} closeModal={propsMock.closeModal} />
        );

        expect(queryAllByRole(/alert/i).length).toBe(0);
    });

    test('show error messages if values not correct and fields touched', async () => {
        jest.spyOn(formikMock, 'useFormik').mockReturnValue({
            values: {
                title: 'title',
                release_date: new Date(),
                poster_path: 'poster_path',
                genres: ['genres1'],
                overview: 'overview',
                runtime: 1
            },
            touched: {
                title: true,
                release_date: true,
                poster_path: true,
                genres: true,
                overview: true,
                runtime: true
            },
            errors: {
                title: 'title error',
                release_date: 'date error',
                poster_path: 'poster_path error',
                genres: 'genres1 error',
                overview: 'overview error',
                runtime: 'runtime error'
            },
            setValues: jest.fn(),
            handleChange: jest.fn(),
            handleSubmit: jest.fn()
        });

        const { queryAllByRole } = render(
            <AddMovieModal addMovie={propsMock.addMovie} closeModal={propsMock.closeModal} />
        );

        expect(queryAllByRole('alert').length).not.toBe(0);
    });

    test('reset button', async () => {
        jest.spyOn(formikMock, 'useFormik').mockReturnValue({
            values: {
                title: 'title',
                release_date: new Date(),
                poster_path: 'poster_path',
                genres: ['genres1'],
                overview: 'overview',
                runtime: 1
            },
            touched: {},
            errors: {},
            setValues: jest.fn(),
            handleChange: jest.fn(),
            handleSubmit: jest.fn()
        });

        const { getByText } = render(
            <AddMovieModal addMovie={propsMock.addMovie} closeModal={propsMock.closeModal} />
        );
        userEvent.click(getByText(/reset/i));
        expect(formikMock.useFormik().setValues).toHaveBeenCalledWith({
            title: '',
            poster_path: '',
            overview: '',
            runtime: 0,
            genres: [],
            release_date: new Date(2021, 0, 1),
        });
    });

    test('submit button', () => {
        jest.spyOn(formikMock, 'useFormik').mockReturnValue({
            values: {
                title: 'title',
                release_date: new Date(2020, 0, 1),
                poster_path: 'poster_path',
                genres: ['genres1'],
                overview: 'overview',
                runtime: 1
            },
            touched: {},
            errors: {},
            setValues: jest.fn(),
            handleChange: jest.fn(),
            handleSubmit: jest.fn()
        });

        const { getByText } = render(
            <AddMovieModal addMovie={propsMock.addMovie} closeModal={propsMock.closeModal} />
        );
        userEvent.click(getByText(/submit/i));
        expect(formikMock.useFormik().handleSubmit).toHaveBeenCalled();
    });

    test('text input', () => {
        jest.spyOn(formikMock, 'useFormik').mockReturnValue({
            values: {
                title: 'title',
                release_date: new Date(2020, 0, 1),
                poster_path: 'poster_path',
                genres: ['genres1'],
                overview: 'overview',
                runtime: 1
            },
            touched: {},
            errors: {},
            setValues: jest.fn(),
            handleChange: jest.fn(),
            handleSubmit: jest.fn()
        });
        const { queryAllByRole } = render(
            <AddMovieModal addMovie={propsMock.addMovie} closeModal={propsMock.closeModal} />
        );
        const inputElements = queryAllByRole(/textbox/i);
        inputElements.forEach(elem => {
            userEvent.type(elem, 'text');
        });
        expect(formikMock.useFormik().handleChange).toHaveBeenCalled();
    });

    test('text input', async() => {
        jest.spyOn(formikMock, 'useFormik').mockReturnValue({
            values: {
                title: 'title',
                release_date: new Date(2020, 0, 1),
                poster_path: 'poster_path',
                genres: ['genres1'],
                overview: 'overview',
                runtime: 1
            },
            touched: {},
            errors: {},
            setValues: jest.fn(),
            handleChange: jest.fn(),
            handleSubmit: jest.fn()
        });
        const { getByTestId } = render(
            <AddMovieModal addMovie={propsMock.addMovie} closeModal={propsMock.closeModal} />
        );
        userEvent.selectOptions(getByTestId("select-multiple"), ['1']);
        expect(formikMock.useFormik().setValues).toHaveBeenCalled();
    });
});
