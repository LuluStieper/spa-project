import { useEffect, useState } from "react";
import { ProtokollResource } from "../Resources";
import { getAlleProtokolle } from "../backend/api";
import { ProtokollDescription } from "./ProtokollDescription";
import { LoadingIndicator } from "./LoadingIndicator";

export function AlleProtokolle() {

    const [alleProtokolle, setProtokolle] = useState<ProtokollResource[] | null>(null);

    async function load() {
        try {
            const alleProtokolle = await getAlleProtokolle();
            setProtokolle(alleProtokolle);
        } catch (error) {
            console.error("Protokolle konnten nicht geladen werden");
        }
    }

    useEffect(() => { 
        load(); }, 
        []
    );

    if (!alleProtokolle) {
        return <LoadingIndicator/>
    }

    return (
        <div>
            {alleProtokolle.map((p) => ( <ProtokollDescription key={p.id} protokoll={p}></ProtokollDescription> ))}
        </div>
    );
}