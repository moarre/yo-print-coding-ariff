import React, { useState, useEffect } from 'react';
import { Toolbar, IconButton, Checkbox, Typography, Divider } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';
import {
    StyledAppBar,
    FilterPopover,
    FilterHeader,
    GenreGrid,
    FilterLabel,
    FilterActions,
    ClearButton,
    ApplyButton,
    FilterBadge,
    AppTitle,
} from './navbar.styles';
import { NavbarProps } from './navbar-type';
import { setSelectedGenres } from '../../../features/anime-listing/model/anime-listing-model';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';

const Navbar: React.FC<NavbarProps> = ({ genres, onGenreSelect }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [tempSelectedGenres, setTempSelectedGenres] = useState<number[]>([]);

    const dispatch = useAppDispatch();
    const selectedGenres = useAppSelector((state) => state.animeListing.selectedGenres);

    useEffect(() => {
        if (anchorEl) {
            setTempSelectedGenres([...(selectedGenres || [])]);
        }
    }, [anchorEl, selectedGenres]);

    const handleOpenFilter = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseFilter = () => {
        setAnchorEl(null);
    };

    const handleGenreToggle = (genreId: number) => {
        setTempSelectedGenres((prev) =>
            prev.includes(genreId) ? prev.filter((id) => id !== genreId) : [...prev, genreId],
        );
    };

    const handleApplyFilter = () => {
        dispatch(setSelectedGenres(tempSelectedGenres));
        onGenreSelect(tempSelectedGenres);
        handleCloseFilter();
    };

    const handleClearFilter = () => {
        setTempSelectedGenres([]);
    };

    return (
        <StyledAppBar>
            <Toolbar sx={{ justifyContent: 'space-between', width: '100%', px: { xs: 2, md: 6 } }}>
                <div style={{ position: 'relative' }}>
                    <IconButton
                        onClick={handleOpenFilter}
                        sx={{
                            color: 'white',
                            backgroundColor: anchorEl ? 'rgba(255, 65, 108, 0.1)' : 'transparent',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 65, 108, 0.2)',
                            },
                        }}
                    >
                        <FilterListIcon />
                        {selectedGenres.length > 0 && <FilterBadge>{selectedGenres.length}</FilterBadge>}
                    </IconButton>

                    <FilterPopover
                        open={Boolean(anchorEl)}
                        anchorEl={anchorEl}
                        onClose={handleCloseFilter}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                    >
                        <FilterHeader>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                Filter by Genre
                            </Typography>
                            <IconButton
                                size="small"
                                onClick={handleCloseFilter}
                                sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                            >
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        </FilterHeader>

                        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', my: 1 }} />

                        <GenreGrid>
                            {genres.map((genre) => (
                                <FilterLabel
                                    key={genre.mal_id}
                                    control={
                                        <Checkbox
                                            checked={tempSelectedGenres.includes(genre.mal_id)}
                                            onChange={() => handleGenreToggle(genre.mal_id)}
                                            size="small"
                                        />
                                    }
                                    label={genre.name}
                                />
                            ))}
                        </GenreGrid>

                        <FilterActions>
                            <ClearButton onClick={handleClearFilter} disabled={tempSelectedGenres.length === 0}>
                                Clear All
                            </ClearButton>
                            <ApplyButton onClick={handleApplyFilter}>Apply Filters</ApplyButton>
                        </FilterActions>
                    </FilterPopover>
                </div>

                <AppTitle>
                    <Typography
                        sx={{
                            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                            fontFamily: '"Roboto Mono", monospace',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            background: 'linear-gradient(90deg, #FF416C, #FF4B2B, #FF8A65)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textShadow: '0 0 15px rgba(255, 65, 108, 0.5)',
                            letterSpacing: '0.1em',
                        }}
                    >
                        Anime Search App
                    </Typography>
                </AppTitle>
            </Toolbar>
        </StyledAppBar>
    );
};

export default Navbar;
