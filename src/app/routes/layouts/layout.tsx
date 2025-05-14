import { Box, Container } from '@mui/material';
import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../../shared/components/navbar/navbar';
import { fetchAnimeByGenre } from '../../../shared/api/get-anime-listing.service';
import { GENRES } from '../../constants/genres';

const Layout: FC = () => {
    const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

    const handleGenreSelect = (genres: number[]) => {
        setSelectedGenres(genres);
        fetchAnimeByGenre(genres);
    };

    return (
        <>
            <Navbar genres={GENRES} onGenreSelect={handleGenreSelect} />
            <Box sx={{ py: 4 }}>
                <Container maxWidth="md">
                    <Outlet context={{ selectedGenres }} />
                </Container>
            </Box>
        </>
    );
};

export default Layout;
