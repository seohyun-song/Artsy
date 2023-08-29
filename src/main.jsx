import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import ThemeProvider from '@contexts/ThemeContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import router from './router';
import GlobalStyle from '@styles/GlobalStyles';
import { ToastContextProvider } from '@contexts/ToastContext.jsx';
import { AuthContextProvider } from './contexts/AuthContext';
import { HeaderContextProvider } from '@contexts/HeaderContext';
import GlobalStyle from '@styles/GlobalStyles';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 30,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
        },
    },
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider>
                <AuthContextProvider>
                    <ToastContextProvider>
                        <HeaderContextProvider>
                            <GlobalStyle />
                            <RouterProvider router={router}></RouterProvider>
                        </HeaderContextProvider>
                    </ToastContextProvider>
                </AuthContextProvider>
            </ThemeProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
