// import './App.css';
import { useEffect, useState } from 'react';
import { ProtokollResource } from './Resources';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback';
import { AlleProtokolle } from './components/AlleProtokolle';

function App() {

  const [selectedProtokoll, setSelectedProtokoll] = useState<ProtokollResource | null>(null);

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <h1>Trinkprotokolle</h1>
        <AlleProtokolle></AlleProtokolle>
      </ErrorBoundary>
    </>
  );

}

export default App;
