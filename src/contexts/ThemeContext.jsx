import { createContext, useCallback, useState } from 'react';
import { lightTheme, darkTheme } from '@styles/theme';
import { ThemeProvider as StyledProvider } from 'styled-components';

export const DarkModeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = useCallback(() => {
        setDarkMode((prev) => !prev);
    }, []);

    const theme = darkMode ? darkTheme : lightTheme;

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            <StyledProvider theme={theme}> {children}</StyledProvider>
        </DarkModeContext.Provider>
    );
};

export default ThemeProvider;
