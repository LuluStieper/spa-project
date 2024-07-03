import { useEffect, useState } from "react";
import { ProtokollResource } from "../Resources";
import { getAlleProtokolle } from "../backend/api";
import LoadingIndicator from "./LoadingIndicator";
import { ProtokollDescription } from "./ProtokollDescription";

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