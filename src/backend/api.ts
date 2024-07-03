// istanbul ignore file -- no coverage, since we would need a running backend for that

import { EintragResource, ProtokollResource } from "../Resources";
import { eintraege, protokolle } from "./testdata";

export async function getAlleProtokolle(): Promise<ProtokollResource[]> {
    if (process.env.REACT_APP_REAL_FETCH!=='true') {
        await new Promise(r => setTimeout(r, 700));
        return Promise.resolve(protokolle);
    } else {
        // Implementieren Sie hier einen echten Fetch-Call,
        // um die Daten tatsächlich von Ihrem Server zu laden.
        throw new Error("not implemented yet")
    }
}

export async function getAlleEintraege(protokollId: string): Promise<EintragResource[]> {
    if (process.env.REACT_APP_REAL_FETCH!=='true') {
        await new Promise(r => setTimeout(r, 700));
        return Promise.resolve(eintraege);
    } else {
        // Implementieren Sie hier einen echten Fetch-Call,
        // um die Daten tatsächlich von Ihrem Server zu laden.
        throw new Error("not implemented yet")
    }
}