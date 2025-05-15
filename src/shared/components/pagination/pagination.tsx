import React from 'react';
import { Box, Button } from '@mui/material';

interface CustomPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const getPageNumbers = () => {
        const pages: (number | string)[] = [];
        const maxVisiblePages = 5;

        pages.push(1);
        let startPage = Math.max(2, currentPage - 1);
        let endPage = Math.min(totalPages - 1, currentPage + 1);

        if (endPage - startPage + 1 < maxVisiblePages - 2) {
            if (startPage === 2) {
                endPage = Math.min(totalPages - 1, startPage + (maxVisiblePages - 3));
            } else if (endPage === totalPages - 1) {
                startPage = Math.max(2, endPage - (maxVisiblePages - 3));
            }
        }

        if (startPage > 2) {
            pages.push('...');
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        if (endPage < totalPages - 1) {
            pages.push('...');
        }

        if (totalPages > 1) {
            pages.push(totalPages);
        }

        return pages;
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mt: 4, mb: 2 }}>
            <Button
                variant="outlined"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                sx={{ minWidth: '36px', px: 1 }}
            >
                &lt;
            </Button>

            {getPageNumbers().map((page, index) => (
                <React.Fragment key={index}>
                    {page === '...' ? (
                        <Box sx={{ mx: 1 }}>...</Box>
                    ) : (
                        <Button
                            variant={currentPage === page ? 'contained' : 'outlined'}
                            onClick={() => typeof page === 'number' && onPageChange(page)}
                            sx={{ minWidth: '36px', px: 1 }}
                        >
                            {page}
                        </Button>
                    )}
                </React.Fragment>
            ))}

            <Button
                variant="outlined"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                sx={{ minWidth: '36px', px: 1 }}
            >
                &gt;
            </Button>
        </Box>
    );
};

export default CustomPagination;
