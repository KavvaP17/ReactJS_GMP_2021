import React from 'react';
import { createUseStyles } from 'react-jss';
import { CustomizedSelect } from '../CustomizedSelect';
import { sortByOptions } from '../../config';
import { ISort } from '../../interfaces';

const useStyles = createUseStyles({
    sortByFilter: {
        display: 'flex',
        alignItems: 'center',

        '& .MuiFormControl-root': {
            minWidth: 200,

            '& .MuiNativeSelect-root': {
                backgroundColor: '#232323',
                textTransform: 'uppercase',
                borderRadius: '5px 5px 0 0',
            },
            '& .MuiNativeSelect-icon': {
                right: 0
            },
            '& .MuiNativeSelect-select:focus': {
                borderRadius: '5px 5px 0 0'
            },
            '& .MuiNativeSelect-select:hover': {
                backgroundColor: '#555555',
            }
        },

    },
    filterLabel: {
        fontSize: 20,
        color: '#888888',
        textTransform: 'uppercase',
        marginRight: 15
    }
});

type Props = {
    selectedValue: ISort;
    sortMovies: (sort: ISort) => void;
};

export const SortByFilter = ({selectedValue, sortMovies}: Props): JSX.Element => {
    const styles = useStyles();

    const changeSortHandler  = (sortValue: string) => {
        const selectedOption = sortByOptions.find(option =>
            option.value.toLocaleLowerCase() === sortValue.toLocaleLowerCase());
        if (selectedOption) {
            sortMovies(selectedOption.key as ISort);
        }
    }

    const getSortingValuebyKey = (key: string) => {
        const selectedOption = sortByOptions.find(option =>
            option.key.toLocaleLowerCase() === key.toLocaleLowerCase());
        return selectedOption?.value;
    };

    return (
        <div className={styles.sortByFilter}>
            <span className={styles.filterLabel}>Sort by</span>
            <CustomizedSelect
                options={sortByOptions}
                placeholder='select sort type'
                selectedValue={getSortingValuebyKey(selectedValue)}
                changeHandler={sortValue => changeSortHandler(sortValue)}/>
        </div>
    )
}
