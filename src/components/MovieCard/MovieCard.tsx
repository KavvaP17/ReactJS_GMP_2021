import React from 'react';
import { createUseStyles } from 'react-jss';
import { Movie } from '../MoviesList/MoviesList';
import { MovieContextMenu } from '../MovieContextMenu';

type Props = {
    movie: Movie
}

const useStyles = createUseStyles({
    movieCard: {
        width: 300,
        margin: '20px 2%',
        position: 'relative',

        '&:hover .context-menu': {
            display: 'block'
        }

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
    },
    movieContextMenu: {
        position: 'absolute',
        top: 10,
        right: 10,
        cursor: 'pointer',
        display: 'none'
    }

});

export const MovieCard = ({ movie }: Props): JSX.Element => {
    const styles = useStyles();
    const {image, title, category, year} = movie;
    return (
        <div className={styles.movieCard}>
            <div className={`${styles.movieContextMenu} context-menu`}>
                <MovieContextMenu />
            </div>
            <div className={styles.movieImage}>
                <img src={image}></img>
            </div>
            <div className={styles.movieDescription}>
                <div>
                    <div className='title'>{title}</div>
                    <div className='category'>{category}</div>
                </div>
                <div className={styles.movieReleaseDate}>{year}</div>
            </div>
        </div>
    )
}
