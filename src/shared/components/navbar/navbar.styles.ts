import { Box, Button, ButtonProps, FormControlLabel, Popover, styled, keyframes } from '@mui/material';

export const strokeOffset = keyframes`
  50% {
    stroke-dashoffset: 35;
    stroke-dasharray: 0 87.5;
  }
`;

export const StyledAppBar = styled('header')({
    backgroundColor: 'rgba(10, 10, 15, 0.95)',
    boxShadow: '0 4px 30px rgba(255, 65, 108, 0.2)',
    backdropFilter: 'blur(10px)',
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    borderBottom: '1px solid rgba(255, 65, 108, 0.3)',
});

export const AppTitle = styled(Box)({
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const TextCopy = styled('use')<{ index: number }>(({ index }) => {
    const colors = ['#FF416C', '#FF4B2B', '#FF6B45', '#FF8A65', '#FFA07A'];

    return {
        fill: 'none',
        stroke: colors[index % colors.length],
        strokeWidth: '2px',
        strokeDasharray: '7 28',
        strokeDashoffset: 7 * (index + 1),
        animation: 'none',
    };
});

export const FilterPopover = styled(Popover)({
    '& .MuiPopover-paper': {
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '8px',
        border: '1px solid rgba(255, 65, 108, 0.3)',
        boxShadow: '0 4px 20px rgba(255, 65, 108, 0.3)',
        padding: '16px',
        maxHeight: '400px',
        width: '320px',
        overflow: 'auto',
    },
});

export const FilterHeader = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
});

export const GenreGrid = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '4px',
});

export const FilterLabel = styled(FormControlLabel)({
    margin: 0,
    '& .MuiTypography-root': {
        fontSize: '0.9rem',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    '& .MuiCheckbox-root': {
        color: 'rgba(255, 65, 108, 0.7)',
        padding: '4px',
    },
    '& .Mui-checked': {
        color: 'rgba(255, 65, 108, 1) !important',
    },
});

export const FilterActions = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '16px',
    paddingTop: '12px',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
});

export const ButtonStyled = styled(Button)<ButtonProps>({
    textTransform: 'none',
    borderRadius: '4px',
    padding: '6px 12px',
    fontSize: '0.85rem',
});

export const ApplyButton = styled(ButtonStyled)({
    backgroundColor: 'rgba(255, 65, 108, 0.8)',
    color: 'white',
    '&:hover': {
        backgroundColor: 'rgba(255, 65, 108, 1)',
    },
});

export const ClearButton = styled(ButtonStyled)({
    color: 'rgba(255, 255, 255, 0.7)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
    },
});

export const FilterBadge = styled(Box)({
    backgroundColor: 'rgba(255, 65, 108, 1)',
    color: 'white',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    position: 'absolute',
    top: '4px',
    right: '4px',
});
