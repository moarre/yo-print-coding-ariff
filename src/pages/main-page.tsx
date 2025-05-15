import React, { useEffect, useState } from 'react';
import { Box, Container, TextField, Typography } from '@mui/material';
import FeatureCard from '../shared/components/feature-card/feature-card';
import { IFeatureCard } from '../shared/components/feature-card/feature-card-type';
import { useAppSelector } from '../shared/hooks/redux-hooks';
import { fetchAnimeByGenre } from '../shared/api/get-anime-listing.service';
import { fetchAnimeWithPagination } from '../shared/api/get-anime-pagination.service';
import CustomPagination from '../shared/components/pagination/pagination';

const MainPage: React.FC = () => {
    const animeList = useAppSelector((state) => state.animeListing.data);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(10);

    const selectedGenres = useAppSelector((state) => state.animeListing.selectedGenres);

    useEffect(() => {
        fetchAnimeByGenre([]);
    }, []);

    const handlePageChange = async (newPage: number) => {
        setCurrentPage(newPage);

        if (selectedGenres.length > 0) {
            await fetchAnimeByGenre(selectedGenres, newPage);
        } else {
            const result = await fetchAnimeWithPagination(newPage);
            if (result.pagination?.last_visible_page) {
                setTotalPages(result.pagination.last_visible_page);
            }
        }
    };

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            {/* Search Bar */}
            <Box
                sx={{
                    mb: 4,
                    bgcolor: 'black',
                    p: 2,
                    borderRadius: 1,
                    color: 'white',
                }}
            >
                <Typography variant="h5" component="h1" sx={{ mb: 2 }}>
                    Anime Search
                </Typography>
                <TextField
                    fullWidth
                    placeholder="Search anime..."
                    variant="outlined"
                    sx={{
                        bgcolor: 'white',
                        borderRadius: 1,
                    }}
                />
            </Box>

            {/* Card List */}
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2,
                    justifyContent: 'flex-start',
                    maxWidth: '1000px',
                    mx: 'auto',
                    p: 2,
                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? 'background.default' : 'grey.100'),
                }}
            >
                {animeList.map((item) => {
                    const cardData: IFeatureCard = {
                        mal_id: item.mal_id,
                        title: item.title,
                        image: item.images.jpg.image_url,
                        synopsis: item.synopsis,
                        episodeNum: item.episodes || 0,
                        isNew: false,
                        releaseTime: '3:00am',
                        rating: item.score?.toFixed(1) ?? 'N/A',
                        votes: 'N/A',
                        seasons: 1,
                        episodes: item.episodes,
                    };

                    return <FeatureCard key={item.mal_id} {...cardData} />;
                })}
            </Box>

            {/* Pagination */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <CustomPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    Page {currentPage} of {totalPages}
                </Typography>
            </Box>
        </Container>
    );
};

export default MainPage;
