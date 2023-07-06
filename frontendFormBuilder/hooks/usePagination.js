
    import { useState, useEffect } from 'react';

    export const usePagination = (initialData = [], initialPerPage = 5) => {
        const [data, setData] = useState(initialData);
        const [currentPage, setCurrentPage] = useState(1);
        const [perPage, setPerPage] = useState(initialPerPage);
        
        // Calculate paginated data
        const calculatePaginatedData = () => {
            const start = (currentPage - 1) * perPage;
            const end = start + perPage;
            return data.slice(start, end);
        };

        const [paginatedData, setPaginatedData] = useState(calculatePaginatedData());
        
        // Re-calculate paginated data whenever the data, current page, or items per page changes
        useEffect(() => {
            setPaginatedData(calculatePaginatedData());
        }, [data, currentPage, perPage]);

        return {
            data,
            setData,
            perPage,
            setPerPage,
            currentPage,
            setCurrentPage,
            paginatedData,
            totalPages: Math.ceil(data.length / perPage)
        };
    };
