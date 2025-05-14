export interface Genre {
    mal_id: number;
    name: string;
}

export interface NavbarProps {
    genres: Genre[];
    onGenreSelect: (selectedGenres: number[]) => void;
}