import React from 'react';
import { createUseStyles } from 'react-jss';
import { Movie } from '../MoviesList/MoviesList';

type Props = {
    movie: Movie
}

const useStyles = createUseStyles({
    movieCard: {
        width: 300,
        margin: '20px 2%'

    },
    movieImage: {
        '& img': {
            width: '100%'
        }

    },
    movieDescription: {
        display: 'flex',
        justifyContent: 'space-between',
        color: '#888888',
        marginTop: 15,

        '& .title': {
            fontSize: 20,
        },

        '& .category': {
            marginTop: 10,
            fontSize: 16
        }

    },
    movieReleaseDate: {
        border: '2px solid #555555',
        padding: '4px 8px',
        height: 16,
        borderRadius: 5
    }

});

export const MovieCard = ({ movie }: Props): JSX.Element => {
    const classes = useStyles();
    const {image, title, category, year} = movie;
    return (
        <div className={classes.movieCard}>
            <div className={classes.movieImage}>
                <img src={image}></img>
            </div>
            <div className={classes.movieDescription}>
                <div>
                    <div className='title'>{title}</div>
                    <div className='category'>{category}</div>
                </div>
                <div className={classes.movieReleaseDate}>{year}</div>
            </div>
        </div>
    )
}
