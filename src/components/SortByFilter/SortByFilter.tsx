import React from 'react';
import { createUseStyles } from 'react-jss';
import { CustomizedSelect } from '../CustomizedSelect';
// import { Dropdown } from '../Dropdown';

const sortByOptions = [
    {
        key: 'releaseDate',
        value: 'release date',
    },
    {
        key: 'mostPopular',
        value: 'most popular'
    }
]
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
})

export const SortByFilter = (): JSX.Element => {
    const styles = useStyles();
    return (
        <div className={styles.sortByFilter}>
            <span className={styles.filterLabel}>Sort by</span>
            <CustomizedSelect options={sortByOptions} placeholder='select sort type'/>
        </div>
    )
}
