import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { IMovie } from '../../interfaces';
import { MovieContextMenu } from '../MovieContextMenu';

type Props = {
    movie: IMovie
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

    const [
        movieContexMenuIsVisible,
        setContextMenuVisibility
    ] = useState(false);

    const openContextMenu = (): void => {
        setContextMenuVisibility(true);
    };

    const closeContextMenu = (): void => {
        setContextMenuVisibility(false);
    }

    const {poster_path, title, genres, release_date} = movie;
    return (
        <div className={styles.movieCard}
            onMouseLeave={closeContextMenu}>
            <div className={`${styles.movieContextMenu} context-menu`}>
                <MovieContextMenu
                    isVisible={movieContexMenuIsVisible}
                    onOpen={openContextMenu}
                    onClose={closeContextMenu}
                    movie={movie}/>
            </div>
            <div className={styles.movieImage}>
                <img src={poster_path}></img>
            </div>
            <div className={styles.movieDescription}>
                <div>
                    <div className='title'>{title}</div>
                    <div className='category'>{genres.join(', ')}</div>
                </div>
                <div className={styles.movieReleaseDate}>{release_date}</div>
            </div>
        </div>
    )
}
