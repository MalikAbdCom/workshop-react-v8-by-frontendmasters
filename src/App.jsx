import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { QueryClient } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';
import SearchParams from './SearchParams';
import Details from './Details';
import { QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
        },
    },
});

const App = () => {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <header>
                    <Link to={'/'}>Adopt me!</Link>
                </header>
                <Routes>
                    <Route path="/details/:id" element={<Details />} />
                    <Route path="/" element={<SearchParams />} />
                </Routes>
            </QueryClientProvider>
        </BrowserRouter>
    );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
