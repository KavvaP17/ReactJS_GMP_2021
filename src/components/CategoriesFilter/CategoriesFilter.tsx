import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { IFilter } from '../../interfaces';
import { categories } from '../../config';

type Props = {
    filterMovies: (filter: IFilter) => void;
};

type Category = {
    id: IFilter,
    title: string
};

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

export const CategoriesFilter = ({filterMovies}: Props): JSX.Element => {
    const styles = useStyles();
    const [activeCategorie, setActiveCategorie] = useState(categories[0]);

    const categorieClickHandler = (category: Category) => {
        filterMovies(category.id);
        setActiveCategorie(category);
    };

    return (
        <ul className={styles.categoriesWrapper}>
            {categories.map((category) => (
                <li key={category.id}
                    className={`${styles.category} ${category.title ===  activeCategorie.title? styles.categoryActive : ''}`}
                    onClick={()=>{categorieClickHandler(category as Category)}}>
                    {category.title}
                </li>
            ))}
        </ul>
    )
}
