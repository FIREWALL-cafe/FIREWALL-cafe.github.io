import React, { useEffect, useState, useContext } from 'react';
import ApiContext from '../contexts/ApiContext';

const Dashboard = () => {
    const [recentSearches, setRecentSearches] = useState([]);
    const { searchArchive } = useContext(ApiContext);

    const fetchRecentSearches = async () => {
        try {
            const filterOptions = { page: 1, page_size: 10 }
            const data = await searchArchive({ ...filterOptions });
            setRecentSearches(data.data || []);
        } catch (error) {
            console.error('Error fetching recent searches:', error);
        }
    };

    useEffect(() => {
        fetchRecentSearches();
        const interval = setInterval(fetchRecentSearches, 30000);
        return () => clearInterval(interval);
    }, [searchArchive]);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Recent Searches</h1>
            <div className="bg-white p-6 rounded-lg shadow">
                <div className="overflow-auto max-h-80">
                    <table className="min-w-full">
                        <thead>
                            <tr>
                                <th className="text-left">Username</th>
                                <th className="text-left">Term</th>
                                <th className="text-left">Translation</th>
                                <th className="text-left">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentSearches.map((search, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="py-2">{search.search_client_name}</td>
                                    <td className="py-2">{search.search_term_initial}</td>
                                    <td className="py-2">{search.search_term_translation || '-'}</td>
                                    <td className="py-2">
                                        {new Date(parseInt(search.search_timestamp)).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard; 