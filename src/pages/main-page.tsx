import { Box } from '@mui/material';
import FeatureCard from '../shared/components/feature-card/feature-card';
import React from 'react';
import { IFeatureCard } from '../shared/components/feature-card/feature-card-type';

const dummyData: IFeatureCard[] = [
    {
        title: 'Naruto Shippuden',
        image: 'https://cdn.myanimelist.net/images/anime/1565/111305.jpg',
        synopsis:
            'Naruto Uzumaki returns after years of training to face new enemies and continue his journey toward becoming Hokage.',
        episodeNum: 4,
        isNew: true,
        releaseTime: '3:00am',
        rating: '4.8',
        votes: '653.1K',
        seasons: 5,
        episodes: 276,
    },
    {
        title: 'Attack on Titan: Final Season',
        image: 'https://cdn.myanimelist.net/images/anime/1000/110531.jpg',
        synopsis: 'Eren and his friends confront the truth behind the Titans and make their final stand.',
        episodeNum: 12,
        isNew: true,
        releaseTime: '5:30pm',
        rating: '4.9',
        votes: '872.4K',
        seasons: 4,
        episodes: 87,
    },
    {
        title: 'Demon Slayer: Entertainment District Arc',
        image: 'https://cdn.myanimelist.net/images/anime/1908/120036.jpg',
        synopsis: 'Tanjiro and friends face deadly demons in a vibrant entertainment district.',
        episodeNum: 7,
        isNew: false,
        releaseTime: '12:45pm',
        rating: '4.7',
        votes: '498.2K',
        seasons: 2,
        episodes: 44,
    },
    {
        title: 'One Piece',
        image: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg',
        synopsis: 'Luffy and his crew sail the seas in search of the ultimate treasure: the One Piece.',
        episodeNum: 1057,
        isNew: false,
        releaseTime: '9:00am',
        rating: '4.8',
        votes: '1.2M',
        seasons: 20,
        episodes: 1057,
    },
    {
        title: 'Jujutsu Kaisen Season 2',
        image: 'https://cdn.myanimelist.net/images/anime/1792/138022.jpg',
        synopsis: 'Yuji and his allies uncover new secrets and face dangerous curses in the second season.',
        episodeNum: 3,
        isNew: true,
        releaseTime: '11:30pm',
        rating: '4.9',
        votes: '534.7K',
        seasons: 2,
        episodes: 36,
    },
];

const MainPage: React.FC = () => {
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
            {dummyData.map((item, index) => (
                <FeatureCard key={index} {...item} />
            ))}
        </Box>
    );
};

export default MainPage;
