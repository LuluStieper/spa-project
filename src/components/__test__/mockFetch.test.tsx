import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { AlleProtokolle } from '../AlleProtokolle';
import { pseudoRandomBytes } from 'crypto';
import { MemoryRouter } from 'react-router-dom';
import { eintraege, protokolle } from '../../backend/testdata';
import { Eintrag } from '../Eintrag';
import { Eintraege } from '../Eintraege';
import { EintragResource } from '../../Resources';
import { PageAdmin } from '../PageAdmin';
import { PagePrefs } from '../PagePrefs';
import { PageProtokoll } from '../PageProtokoll';
import { Protokoll } from '../Protokoll';

const orgLog = console.log;
const orgError = console.error;
const eintrag = eintraege[0];
const alleEintraege: EintragResource[] = eintraege;
const protokoll1 = protokolle[0];

beforeEach(() => {
    console.log = () => { };
    console.error = () => { };
});

test('mockFetch', async () => {
    render(
      <MemoryRouter>
        <Eintrag eintrag={eintrag}></Eintrag>
      </MemoryRouter>
    );
  
    await waitFor(() => {
      expect(screen.queryByText("Loading …")).not.toBeInTheDocument();
    });
  
    const getraenk = screen.getByText(/Getränk/);
    expect(getraenk).toHaveTextContent(/Getränk/);

    const menge = screen.getByText(/Menge/);
    expect(menge).toHaveTextContent(/Menge/);

    const protokoll = screen.getByText(/Protokoll/);
    expect(protokoll).toHaveTextContent(/Protokoll/);
});

afterEach(() => {
    console.log = orgLog;
    console.error = orgError;
});