import React from 'react';
import { createUseStyles } from 'react-jss';

type Category = {
    title: string,
    active: boolean
};

const categories: Category[] = [
    {
        title: 'All',
        active: true
    },
    {
        title: 'Documentary',
        active: false
    },
    {
        title: 'Comedy',
        active: false
    },
    {
        title: 'Horror',
        active: false
    },
    {
        title: 'Crime',
        active: false
    },
];

const useStyles = createUseStyles({
    categoriesWrapper: {
        display: 'flex',
        color: '#ffffff',
        fontSize: 20
    },
    category: {
        marginRight: 20,
        padding: '15px 10px',
        textTransform: 'uppercase',
        marginBottom: -3,
        cursor: 'pointer',

        '&:hover': {
            borderRadius: '5px 5px 0 0',
            backgroundColor: '#555555'
        }
    },
    categoryActive: {
        borderBottom: '3px solid #f65261'
    }
})

export const CategoriesFilter = (): JSX.Element => {
    const classes = useStyles();
    return (
        <ul className={classes.categoriesWrapper}>
            {categories.map((category, index) => (
                <li key={index}
                    className={`${classes.category} ${category.active ? classes.categoryActive : ''}`}>
                    {category.title}
                </li>
            ))}
        </ul>
    )
}
