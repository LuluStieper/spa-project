import { useEffect, useState } from "react";
import { ProtokollResource } from "../Resources";
import { getAlleProtokolle } from "../backend/api";
import { ProtokollDescription } from "./ProtokollDescription";
import { LoadingIndicator } from "./LoadingIndicator";
import { Link } from "react-router-dom";

export function AlleProtokolle() {
    const [alleProtokolle, setAlleProtokolle] = useState<ProtokollResource[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function load() {
            try {
                const protokolle = await getAlleProtokolle();
                setAlleProtokolle(protokolle);
                setIsLoading(false);
            } catch (error) { 
                console.error("Protokolle konnten nicht geladen werden", error);
            } 
        }
        load();
    }, []); 

    if (isLoading) {
        return <LoadingIndicator />;
    }

    return (
        <div>
            {alleProtokolle!.map((p) => (
                <div>
                    <ProtokollDescription protokoll={p} key={p.id} />
                    <Link to={`/protokoll/${p.id}`}>Protokoll öffnen</Link>
                </div>
            ))}
        </div>
    );
    
}