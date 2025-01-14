// import './App.css';
import { useState } from 'react';
import { ProtokollResource } from './Resources';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PageIndex } from './components/PageIndex';
import { PageProtokoll } from './components/PageProtokoll';
import { PageEintrag } from './components/PageEintrag';
import { PageAdmin } from './components/PageAdmin';
import { PagePrefs } from './components/PagePrefs';
import React from 'react';
import { Header } from './components/Header';

function App() {

  const [selectedProtokoll, setSelectedProtokoll] = useState<ProtokollResource | null>(null);

  return (
    <React.StrictMode>

      <ErrorBoundary FallbackComponent={ErrorFallback}>

        <Header></Header>

        <Routes>
          <Route path="/" element={<PageIndex />} />
          <Route path="/protokoll/:protokollId" element={<PageProtokoll />} />
          <Route path="/eintraege/:protokollId" element={<PageEintrag />} />
          <Route path="/eintrag/:eintragId" element={<PageEintrag />} />
          <Route path="/admin" element={<PageAdmin />} />
          <Route path="/prefs" element={<PagePrefs />} />
          <Route path="*" element={<PageIndex />} />
        </Routes>
      </ErrorBoundary>

    </React.StrictMode>
  );

}

export default App;
