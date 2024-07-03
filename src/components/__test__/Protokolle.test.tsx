import React from 'react';
import { render, screen } from '@testing-library/react';
import { AlleProtokolle } from '../AlleProtokolle';
import { pseudoRandomBytes } from 'crypto';

const orgLog = console.log;
const orgError = console.error;

beforeEach(() => {
    console.log = () => { };
    console.error = () => { };
});

test('AlleProtokolle und ProtokollDescriotion korrekt', async () => {
    render(
      <AlleProtokolle />
    );
  
    const loadingElements = await screen.findAllByText(/Loading.../);
  
    loadingElements.forEach(element => {
        expect(element).toHaveTextContent(/Loading.../);
    });
  
    const patientElements = await screen.findAllByText(/Patient/);
  
    patientElements.forEach(element => {
      expect(element).toHaveTextContent(/Patient/);
    });
});

afterEach(() => {
    console.log = orgLog;
    console.error = orgError;
});