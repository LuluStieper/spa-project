// istanbul ignore file -- no coverage, since we would need a running backend for that

import { EintragResource, ProtokollResource } from "../Resources";
import { eintraege, protokolle } from "./testdata";

const SERVER = process.env.REACT_APP_API_SERVER_URL || "https://localhost:3001"

export async function getAlleProtokolle(): Promise<ProtokollResource[]> {
    if (process.env.REACT_APP_REAL_FETCH!=='true') {
        await new Promise(r => setTimeout(r, 700));
        return Promise.resolve(protokolle);
    } else {
        try {
            const response = await fetch(`${SERVER}/api/protokoll/alle`
                // ,
                // {
                //     credentials: "include"
                // }
            );
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
            const response = await fetch(`${SERVER}/api/protokoll/${protokollId}/eintraege`);
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
            const response = await fetch(`${SERVER}/api/protokoll/${protokollId}`);
            if (!response.ok) {
                throw new Error(`Fehler beim Laden des Protokolles: ${response.statusText}`);
            }
            const data: ProtokollResource = await response.json();
            return data;
        } catch (error) {
            console.error("Fehler beim Laden des Protokolles:", error);
            throw error;
        }
    }
}

export async function getEintrag(eintragId: string): Promise<EintragResource> {
    if (process.env.REACT_APP_REAL_FETCH!=='true') {
        await new Promise(r => setTimeout(r, 700));
        return Promise.resolve(eintraege[0]);
    } else {
        try {
            const response = await fetch(`${SERVER}/api/eintrag/${eintragId}`);
            if (!response.ok) {
                throw new Error(`Fehler beim Laden des Eintrags: ${response.statusText}`);
            }
            const data: EintragResource = await response.json();
            return data;
        } catch (error) {
            console.error("Fehler beim Laden des Eintrags:", error);
            throw error;
        }
    }
}