import React from "react";
import App from './App';
import { ResetCSS } from './global/resetCSS';
import PokemonProvider from './providers/pokemon-provider';

const Providers = () => {
    return (
        <main>
            <PokemonProvider>
                <ResetCSS />
                <App />
            </PokemonProvider>
        </main>
    );
};

export default Providers;