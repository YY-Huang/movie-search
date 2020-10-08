import React from 'react';
import IndexPage from './pages/index';
import { ThemeProvider } from 'styled-components';
import { light } from './styles/themes';

function App() {
    return (
        <ThemeProvider theme={light}>
            <div className="App">
                <IndexPage />
            </div>
        </ThemeProvider>
    );
}

export default App;