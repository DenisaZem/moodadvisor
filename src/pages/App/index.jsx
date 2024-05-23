import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { HomePage } from '../HomePage';


// i18n translations might still be loaded by the http backend
// use react's Suspense
export const App = () => {
  return (
    <Suspense fallback="loading">
      <HomePage />
    </Suspense>
  );
}