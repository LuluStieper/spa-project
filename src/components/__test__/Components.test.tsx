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

test('Eintrag korrekt', async () => {
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

test('Eintraege korrekt', async () => {
    render(
      <MemoryRouter>
        <Eintraege eintraege={alleEintraege}></Eintraege>
      </MemoryRouter>
    );
  
    await waitFor(() => {
      expect(screen.queryByText("Loading …")).not.toBeInTheDocument();
    });
  
    const getraenk = screen.getByText(/Getränk/);
    expect(getraenk).toHaveTextContent(/Getränk/);

    const menge = screen.getByText(/Menge/);
    expect(menge).toHaveTextContent(/Menge/);
});

test('Protokoll korrekt', async () => {
    render(
      <MemoryRouter>
        <Protokoll protokoll={protokoll1}></Protokoll>
      </MemoryRouter>
    );
  
    await waitFor(() => {
      expect(screen.queryByText("Loading …")).not.toBeInTheDocument();
    });
  
    const getraenk = screen.getByText(/Protokoll/);
    expect(getraenk).toHaveTextContent(/Protokoll/);
});

test('PageAdmin korrekt', async () => {
    render(
      <MemoryRouter>
       <PageAdmin></PageAdmin>
      </MemoryRouter>
    );
  
    const text = screen.getByText(/PageAdmin/);
    expect(text).toHaveTextContent(/PageAdmin/);
});


test('PagePrefs korrekt', async () => {
    render(
      <MemoryRouter>
       <PagePrefs></PagePrefs>
      </MemoryRouter>
    );
  
    const text = screen.getByText(/PagePrefs/);
    expect(text).toHaveTextContent(/PagePrefs/);
});

test('PageProtokoll korrekt', async () => {
    render(
      <MemoryRouter>
       <PageProtokoll></PageProtokoll>
      </MemoryRouter>
    );
  
    await waitFor(() => {
        expect(screen.queryByText("Loading …")).not.toBeInTheDocument();
    });

    // const protokoll = screen.getByText(/Protokoll/);
    // expect(protokoll).toHaveTextContent(/Protokoll/);
});

afterEach(() => {
    console.log = orgLog;
    console.error = orgError;
});