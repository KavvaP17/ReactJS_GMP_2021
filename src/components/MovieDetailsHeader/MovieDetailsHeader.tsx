import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Logo } from '../Logo';
import { Rating } from '../Rating';
import SearchIcon from '@material-ui/icons/Search';
import { IMovie } from '../../interfaces';
import { Link, Redirect } from 'react-router-dom';

type Props = {
    movie: IMovie
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
    movieImgContainer: {
        backgroundImage: 'url(../static/no-image.png)',
        backgroundSize: 'cover',
        height: 420,
        width: 300
    },
    movieImg: {
        height: 420,
        width: 300
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
    },
    logoContainer : {
        textDecoration : 'none'
    }
});

export const MovieDetailsHeader = ({ movie }: Props): JSX.Element => {
    const styles = useStyles();
    const [selectedMovie, setSelectedMovie] = useState<IMovie>(movie)

    useEffect(() => {
        setSelectedMovie(movie);
    }, [movie]);

    return (
        !movie
            ? <Redirect to="/" />
            : (
                <div className={styles.headerContainer}>
                    <div className={styles.topContainer}>
                        <Link className={styles.logoContainer} to={'/'}>
                            <Logo />
                        </Link>
                        <Link to={`/search/`}>
                            <SearchIcon className={styles.search} />
                        </Link>
                    </div>
                    <div className={styles.detailContainer}>
                        <div className={styles.movieImgContainer}>
                            <img src={selectedMovie.poster_path} className={styles.movieImg}></img>
                        </div>
                        <div className={styles.movieInfo}>
                            <div className={styles.movieTitleContainer}>
                                <h1 className={styles.movieTitle}>
                                    {selectedMovie.title}
                                </h1>
                                <Rating vote={selectedMovie.vote_average} />
                            </div>
                            <div className={styles.movieCategoryContainer}>
                                {selectedMovie.tagline}
                            </div>
                            <div className={styles.movieAdditionalInfoContainer}>
                                <div className={styles.movieYearContainer}>
                                    {(new Date(selectedMovie.release_date)).getFullYear()}
                                </div>
                                <div className={styles.movieDurrationContainer}>
                                    {`${selectedMovie.runtime} min`}
                                </div>
                            </div>
                            <p className={styles.movieDescription}>
                                {selectedMovie.overview}
                            </p>
                        </div>
                    </div>
                </div>
            )
    )
}
