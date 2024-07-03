import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorFallback from '../ErrorFallback';
import Bomb from './Bomb';
import { ErrorBoundary } from 'react-error-boundary';

const orgLog = console.log;
const orgError = console.error;

beforeEach(() => {
    console.log = () => { };
    console.error = () => { };
});

test('renders Bomb', () => {
  render(
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Bomb />
    </ErrorBoundary>
  );

  const cabooms = screen.getAllByText('💥 CABOOM 💥');

  cabooms.forEach(element => {
    expect(element).toHaveTextContent('💥 CABOOM 💥');
  });
});

afterEach(() => {
    console.log = orgLog;
    console.error = orgError;
});
