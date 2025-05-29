import React, { createContext, useState, useEffect } from 'react';

const TranslationContext = createContext();

const TranslationProvider = ({ children }) => {
    const [isGerman, setIsGerman] = useState(false);

    const toggleTranslation = () => {
        setIsGerman(!isGerman);
    };

    return (
        <TranslationContext.Provider value={{ isGerman, toggleTranslation }}>
            {children}
        </TranslationContext.Provider>
    );
};

export default TranslationContext;

export { TranslationProvider };