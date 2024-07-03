// istanbul ignore file -- no coverage, since we would need a running backend for that

import { EintragResource, ProtokollResource } from "../Resources";
import { eintraege, protokolle } from "./testdata";

export async function getAlleProtokolle(): Promise<ProtokollResource[]> {
    if (process.env.REACT_APP_REAL_FETCH!=='true') {
        await new Promise(r => setTimeout(r, 700));
        return Promise.resolve(protokolle);
    } else {
        try {
            const response = await fetch(`https://localhost:3000/protokoll`);
            if (!response.ok) {
                throw new Error(`Fehler beim Laden der Protokolle: ${response.statusText}`);
            }
            const data: ProtokollResource[] = await response.json();
            return data;
        } catch (error) {
            console.error("Fehler beim Laden der Protokolle:", error);
            throw error;
        }
    }
}

export async function getAlleEintraege(protokollId: string): Promise<EintragResource[]> {
    if (process.env.REACT_APP_REAL_FETCH!=='true') {
        await new Promise(r => setTimeout(r, 700));
        return Promise.resolve(eintraege);
    } else {
        try {
            const response = await fetch(`https://localhost:3000/eintraege/${protokollId}`);
            if (!response.ok) {
                throw new Error(`Fehler beim Laden der Protokolle: ${response.statusText}`);
            }
            const data: EintragResource[] = await response.json();
            return data;
        } catch (error) {
            console.error("Fehler beim Laden der Protokolle:", error);
            throw error;
        }
    }
}

export async function getProtokoll(protokollId: string): Promise<ProtokollResource> {
    if (process.env.REACT_APP_REAL_FETCH!=='true') {
        await new Promise(r => setTimeout(r, 700));
        return Promise.resolve(protokolle[0]);
    } else {
        try {
            const response = await fetch(`https://localhost:3000/protokoll/${protokollId}`);
            if (!response.ok) {
                throw new Error(`Fehler beim Laden der Protokolle: ${response.statusText}`);
            }
            const data: ProtokollResource = await response.json();
            return data;
        } catch (error) {
            console.error("Fehler beim Laden der Protokolle:", error);
            throw error;
        }
    }
}