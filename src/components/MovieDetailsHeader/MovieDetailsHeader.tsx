import React from 'react';
import { createUseStyles } from 'react-jss';
import { Logo } from '../Logo';
import { Movie } from '../MoviesList/MoviesList';
import { Rating } from '../Rating';
import SearchIcon from '@material-ui/icons/Search';

type Props = {
    movie: Movie
}

const useStyles = createUseStyles({
    headerContainer: {
        backgroundImage: 'url(https://www.atomcreativemedia.com/wp-content/uploads/2018/09/orange-and-blue-movies-2.jpg)',
        borderBottom: '10px solid #555555',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '20px 5%',
        boxShadow: 'inset 0 0 0 2000px rgb(0 0 0 / 90%)'
    },
    topContainer: {
        display: 'flex',
        justifyContent: 'space-between'

    },
    search: {
        color: '#f65261',
        fontSize: '35px!important',
        cursor: 'pointer'
    },
    detailContainer: {
        display: 'flex',
        margin: '40px 0'
    },
    movieImg: {
        minWidth: 300,
        height: 'auto'
    },
    movieInfo: {
        margin: '20px 50px 0',
        minWidth: 500,
    },
    movieTitleContainer: {
        display: 'flex',
        marginBottom: 10
    },
    movieTitle: {
        color: 'white',
        fontSize: 50,
        lineHeight: '64px',
        paddingRight: 20
    },
    movieCategoryContainer: {
        color: '#555555',
        fontSize: 20,
        marginBottom: 30
    },
    movieAdditionalInfoContainer: {
        display: 'flex',
        color: '#f65261',
        fontSize: 25,
        marginBottom: 30
    },
    movieYearContainer: {
        marginRight: 10
    },
    movieDurrationContainer: {
        marginLeft: 10
    },
    movieDescription: {
        color: 'white',
        fontSize: 22,
        lineHeight: '30px'
    }
});

export const MovieDetailsHeader = ({ movie }: Props): JSX.Element => {
    const styles = useStyles();

    return (
        <div className={styles.headerContainer}>
            <div className={styles.topContainer}>
                <Logo />
                <SearchIcon className={styles.search}/>
            </div>
            <div className={styles.detailContainer}>
                <img src={movie.image} className={styles.movieImg}></img>
                <div className={styles.movieInfo}>
                    <div className={styles.movieTitleContainer}>
                        <h1 className={styles.movieTitle}>
                            {movie.title}
                        </h1>
                        <Rating rating={movie.rating} />
                    </div>
                    <div className={styles.movieCategoryContainer}>
                        {movie.category}
                    </div>
                    <div className={styles.movieAdditionalInfoContainer}>
                        <div className={styles.movieYearContainer}>
                            {movie.year}
                        </div>
                        <div className={styles.movieDurrationContainer}>
                            {`${movie.duration} min`}
                        </div>
                    </div>
                    <p className={styles.movieDescription}>
                        {movie.description}
                    </p>
                </div>
            </div>
        </div>
    )
}
