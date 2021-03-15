import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

type Category = {
    title: string
};

const categoriesMock: Category[] = [
    {
        title: 'All',
    },
    {
        title: 'Documentary',
    },
    {
        title: 'Comedy',
    },
    {
        title: 'Horror',
    },
    {
        title: 'Crime',
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
    const styles = useStyles();
    const [activeCategorie, setActiveCategorie] = useState(categoriesMock[0]);

    const categorieClickHandler = (category: Category) => {
        setActiveCategorie(category);
    };

    return (
        <ul className={styles.categoriesWrapper}>
            {categoriesMock.map((category, index) => (
                <li key={index}
                    className={`${styles.category} ${category.title ===  activeCategorie.title? styles.categoryActive : ''}`}
                    onClick={()=>{categorieClickHandler(category)}}>
                    {category.title}
                </li>
            ))}
        </ul>
    )
}
