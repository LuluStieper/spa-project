import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { AlleProtokolle } from '../AlleProtokolle';
import { pseudoRandomBytes } from 'crypto';
import { MemoryRouter } from 'react-router-dom';

const orgLog = console.log;
const orgError = console.error;

beforeEach(() => {
    console.log = () => { };
    console.error = () => { };
});

test('Loading korrekt', async () => {
    render(
      <AlleProtokolle />
    );
  
    const loadingElements = await screen.findAllByText(/Loading.../);
  
    loadingElements.forEach(element => {
        expect(element).toHaveTextContent(/Loading.../);
    });
});

test('AlleProtokolle und ProtokollDescriotion korrekt', async () => {
  render(
    <MemoryRouter>
      <AlleProtokolle />
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(screen.queryByText("Loading …")).not.toBeInTheDocument();
  });

  const patientElements = await screen.findAllByText(/Protokoll/);

  patientElements.forEach(element => {
    expect(element).toHaveTextContent(/Protokoll/);
  });
});



afterEach(() => {
    console.log = orgLog;
    console.error = orgError;
});