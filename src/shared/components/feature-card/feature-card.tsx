import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Typography, Box, IconButton, Chip } from '@mui/material';
import { PlayArrow, PlaylistAdd, Info, Schedule } from '@mui/icons-material';

import { IFeatureCard } from './feature-card-type';

import {
    CardContainer,
    CardInner,
    CardFront,
    CardBack,
    CardImage,
    Synopsis,
    MobileCardContainer,
    MobileCardImage,
    MobileCardContent,
    MobileTitle,
    MobileEpisodeLabel,
    MobileActionBar,
    MobileMetaWrapper,
} from './feature-card.styles';

const FeatureCard: React.FC<IFeatureCard> = ({
    title,
    synopsis,
    image,
    episodeNum,
    isNew,
    releaseTime,
    rating,
    votes,
    seasons,
    episodes,
}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
        if (!isMobile) {
            setFlipped((prev) => !prev);
        }
    };

    if (isMobile) {
        return (
            <MobileCardContainer>
                <Box position="relative" flexShrink={0}>
                    <MobileCardImage src={image} alt={title} />
                    {isNew && (
                        <Chip
                            label="NEW"
                            size="small"
                            color="error"
                            sx={{
                                position: 'absolute',
                                top: 5,
                                left: 5,
                                height: 20,
                                fontSize: '0.65rem',
                                fontWeight: 'bold',
                            }}
                        />
                    )}
                </Box>

                <MobileCardContent>
                    <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                        <MobileTitle variant="subtitle2">{title}</MobileTitle>
                    </Box>

                    <MobileEpisodeLabel>
                        <Typography variant="body2" color="gold">
                            👑
                        </Typography>
                        <Typography variant="caption" fontWeight="medium" color="gold">
                            Episode {episodeNum}
                        </Typography>
                    </MobileEpisodeLabel>

                    <MobileMetaWrapper>
                        <Box display="flex" alignItems="center" gap={0.5}>
                            <Schedule fontSize="small" color="primary" sx={{ fontSize: 14 }} />
                            <Typography variant="caption" color="primary.light">
                                {releaseTime}
                            </Typography>
                        </Box>
                    </MobileMetaWrapper>

                    <MobileActionBar>
                        <IconButton size="small" color="primary" aria-label="play">
                            <PlayArrow fontSize="small" />
                        </IconButton>
                        <IconButton size="small" color="inherit" aria-label="add to list">
                            <PlaylistAdd fontSize="small" />
                        </IconButton>
                        <IconButton size="small" color="inherit" aria-label="information">
                            <Info fontSize="small" />
                        </IconButton>
                    </MobileActionBar>
                </MobileCardContent>
            </MobileCardContainer>
        );
    }

    return (
        <CardContainer onClick={handleClick}>
            <CardInner className="card-inner" flipped={flipped}>
                <CardFront>
                    <CardImage src={image} alt={title} />
                    <Typography
                        variant="body2"
                        textAlign="center"
                        px={1}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        height="100%"
                    >
                        {title}
                    </Typography>
                </CardFront>

                <CardBack>
                    <Box>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                            {title}
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                            {rating} ★ ({votes})
                            <br />
                            {seasons} {seasons > 1 ? 'Seasons' : 'Season'}
                            <br />
                            {episodes} {episodes > 1 ? 'Episodes' : 'Episode'}
                        </Typography>
                        <Synopsis variant="body2">{synopsis}</Synopsis>
                    </Box>
                    <Box mt={2} display="flex" gap={1}>
                        <IconButton sx={{ color: 'white' }}>
                            <PlayArrow />
                        </IconButton>
                        <IconButton sx={{ color: 'white' }}>
                            <PlaylistAdd />
                        </IconButton>
                        <IconButton sx={{ color: 'white' }}>
                            <Info />
                        </IconButton>
                    </Box>
                </CardBack>
            </CardInner>
        </CardContainer>
    );
};

export default FeatureCard;
