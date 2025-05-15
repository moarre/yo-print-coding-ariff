import { useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Typography, Box, Chip } from '@mui/material';
import { Schedule } from '@mui/icons-material';

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
    MobileMetaWrapper,
    MobileSynopsis,
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
    mal_id,
}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/anime/${mal_id}`);
    };

    if (isMobile) {
        return (
            <MobileCardContainer onClick={handleClick}>
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
                    <MobileTitle variant="subtitle2">{title}</MobileTitle>
                    <MobileEpisodeLabel>
                        <Typography variant="body2" color="gold">
                            👑
                        </Typography>
                        <Typography variant="caption" fontWeight="medium" color="gold">
                            Episode {episodeNum}
                        </Typography>
                    </MobileEpisodeLabel>

                    <MobileSynopsis variant="body2">{synopsis}</MobileSynopsis>

                    <MobileMetaWrapper>
                        <Box display="flex" alignItems="center" gap={0.5}>
                            <Schedule fontSize="small" color="primary" sx={{ fontSize: 14 }} />
                            <Typography variant="caption" color="primary.light">
                                {releaseTime}
                            </Typography>
                        </Box>
                    </MobileMetaWrapper>
                </MobileCardContent>
            </MobileCardContainer>
        );
    }

    return (
        <CardContainer onClick={handleClick}>
            <CardInner className="card-inner" flipped={false}>
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
                            {rating} ★ ({votes})<br />
                            {seasons} {seasons > 1 ? 'Seasons' : 'Season'}
                            <br />
                            {episodes} {episodes > 1 ? 'Episodes' : 'Episode'}
                        </Typography>
                        <Synopsis variant="body2">{synopsis}</Synopsis>
                    </Box>
                </CardBack>
            </CardInner>
        </CardContainer>
    );
};

export default FeatureCard;
