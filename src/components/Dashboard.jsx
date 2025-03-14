import React, { useEffect, useState, useContext } from 'react';
import ApiContext from '../contexts/ApiContext';

const Dashboard = () => {
    const [recentSearches, setRecentSearches] = useState([]);
    const [stats, setStats] = useState({
        totalSearches: 0,
        totalImages: 0,
        totalVotes: 0,
        totalUsers: 0
    });
    const { searchArchive, getDashboard } = useContext(ApiContext);

    const fetchDashboardData = async () => {
        try {
            const data = await getDashboard();
            setStats(data);
        } catch (error) {
            console.error('Error fetching dashboard stats:', error);
        }
    };

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
        fetchDashboardData();
        fetchRecentSearches();
    }, [searchArchive]);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
            
            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-gray-500 text-sm font-medium">Total Searches</h3>
                    <p className="text-2xl font-bold">{stats.totalSearches.count}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-gray-500 text-sm font-medium">Total Images</h3>
                    <p className="text-2xl font-bold">{stats.totalImages.count}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-gray-500 text-sm font-medium">Total Votes</h3>
                    <p className="text-2xl font-bold">{stats.totalVotes.count}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-gray-500 text-sm font-medium">Total Users</h3>
                    <p className="text-2xl font-bold">{stats.totalUsers.count}</p>
                </div>
            </div>

            {/* Existing Recent Searches Section */}
            <h2 className="text-2xl font-bold mb-4">Recent Searches</h2>
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
                                        {new Date(parseInt(search.search_timestamp)).toLocaleString()}
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