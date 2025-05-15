import { Box, Typography, Button, Chip, Stack } from '@mui/material';
import { useParams } from 'react-router-dom';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useAppSelector } from '../shared/hooks/redux-hooks';
import { RootState } from '../shared/redux/store';

const DetailedPage = () => {
    const { id } = useParams();
    const animeList = useAppSelector((state: RootState) => state.animeListing.data);

    const anime = animeList.find((item) => item.mal_id.toString() === id);

    if (!anime) {
        return <Typography color="white">Anime not found.</Typography>;
    }

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                p: { xs: 2, md: 6 },
                color: 'white',
                background: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2)), url(${anime.images.jpg.image_url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center right',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Box maxWidth="sm" zIndex={1}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    {anime.title}
                </Typography>

                <Chip
                    label={anime.rating || 'Not Rated'}
                    size="small"
                    sx={{ mb: 1, bgcolor: '#444', color: 'white' }}
                />

                <Typography variant="body2" sx={{ mb: 1 }}>
                    {anime.season ? `${anime.season.toUpperCase()} ${anime.year}` : 'Unknown Season'}
                </Typography>

                {/* <Typography sx={{ mb: 2 }}>
                    ⭐ {anime.score} ({anime.scored_by} votes)
                </Typography> */}

                <Stack direction="row" spacing={1} mb={2} flexWrap="wrap">
                    {anime.genres.map((genre) => (
                        <Chip
                            key={genre.name}
                            label={genre.name}
                            size="small"
                            sx={{ bgcolor: '#ff5722', color: 'white' }}
                        />
                    ))}
                </Stack>

                <Typography variant="body2" sx={{ mb: 3 }}>
                    {anime.synopsis || 'No synopsis available.'}
                </Typography>

                <Button variant="contained" size="large" startIcon={<PlayArrowIcon />}>
                    Start Watching E1
                </Button>
            </Box>
        </Box>
    );
};

export default DetailedPage;
