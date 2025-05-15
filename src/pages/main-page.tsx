import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import FeatureCard from '../shared/components/feature-card/feature-card';
import { IFeatureCard } from '../shared/components/feature-card/feature-card-type';
import { useAppSelector } from '../shared/hooks/redux-hooks';
import { fetchAnimeByGenre } from '../shared/api/get-anime-listing.service';

const MainPage: React.FC = () => {
    const animeList = useAppSelector((state) => state.animeListing.data);

    useEffect(() => {
        fetchAnimeByGenre([]);
    }, []);

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                justifyContent: 'center',
                maxWidth: 1200,
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
    );
};

export default MainPage;
