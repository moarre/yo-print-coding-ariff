import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

/* DESKTOP CARD STYLES */

export const CardContainer = styled(Box)(({ theme }) => ({
    width: 225,
    height: 340,
    perspective: '1000px',
    cursor: 'pointer',

    [theme.breakpoints.up('sm')]: {
        '&:hover .card-inner': {
            transform: 'rotateY(180deg)',
        },
    },

    [theme.breakpoints.down('sm')]: {
        display: 'none',
    },
}));

export const CardInner = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'flipped',
})<{ flipped: boolean }>(({ flipped }) => ({
    position: 'relative',
    width: '100%',
    height: '100%',
    transition: 'transform 0.6s ease',
    transformStyle: 'preserve-3d',
    transform: flipped ? 'rotateY(180deg)' : 'none',
}));

export const CardSide = styled(Box)(({ theme }) => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    borderRadius: theme.spacing(1),
    overflow: 'hidden',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
    display: 'flex',
    flexDirection: 'column',
}));

export const CardFront = styled(CardSide)({
    backgroundColor: 'white',
});

export const CardBack = styled(CardSide)(({ theme }) => ({
    backgroundColor: theme.palette.grey[900],
    color: 'white',
    transform: 'rotateY(180deg)',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
}));

export const CardImage = styled('img')({
    width: '100%',
    height: 270,
    objectFit: 'cover',
});

export const Synopsis = styled(Typography)(({ theme }) => ({
    fontSize: '0.75rem',
    opacity: 0.85,
    display: '-webkit-box',
    WebkitLineClamp: 5,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',

    [theme.breakpoints.down('sm')]: {
        WebkitLineClamp: 3,
    },
}));

/* MOBILE CARD STYLES */

export const MobileCardContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    gap: theme.spacing(2),
    padding: theme.spacing(1.5),
    alignItems: 'flex-start',
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.background.paper,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    borderRadius: theme.spacing(1.5),
    margin: theme.spacing(1, 0),
    position: 'relative',
    overflow: 'hidden',
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:active': {
        transform: 'scale(0.98)',
        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.15)',
    },
    [theme.breakpoints.up('sm')]: {
        display: 'none',
    },
}));

export const MobileCardImage = styled('img')(({ theme }) => ({
    width: 120,
    height: 'auto',
    objectFit: 'cover',
    borderRadius: theme.spacing(1),
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
}));

export const MobileCardContent = styled(Box)(({ theme }) => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(0.75),
    overflow: 'hidden',
}));

export const MobileTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.text.primary,
    lineHeight: 1.2,
    fontSize: '0.95rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
}));

export const MobileEpisodeLabel = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(0.25),
    marginBottom: theme.spacing(0.25),
}));

export const MobileMetaWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: theme.spacing(0.5),
}));

export const MobileActionBar = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    marginTop: theme.spacing(0.75),
    '& .MuiIconButton-root': {
        padding: 6,
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(30, 30, 30, 0.6)' : 'rgba(240, 240, 240, 0.8)',
        '&:first-of-type': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
        },
    },
}));
