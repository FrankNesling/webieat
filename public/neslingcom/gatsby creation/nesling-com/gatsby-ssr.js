import React from 'react';
import { TranslationProvider } from './src/context/TranslationContext';

export const wrapRootElement = ({ element }) => (
    <TranslationProvider>{element}</TranslationProvider>
);


export const onRenderBody = ({ setHtmlAttributes }) => {
    setHtmlAttributes({ lang: `en` });
};