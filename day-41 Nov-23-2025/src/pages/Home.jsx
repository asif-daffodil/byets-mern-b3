import React from 'react';
import Hero from '../components/Hero';
import Users from '../components/users/Users';
import { Helmet } from 'react-helmet';
import SimpleBarChart from '../components/SimpleBarChart';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Home = () => {
    const {data, isFetching, isError } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:4000/services', {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return res.data;
        }
    })
    console.log(data);
    return (
        <div>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <Hero />
            <Users />
            <SimpleBarChart />
        </div>
    );
};

export default Home;