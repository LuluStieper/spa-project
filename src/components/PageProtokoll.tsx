import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProtokoll } from "../backend/api";
import { ProtokollDescription } from "./ProtokollDescription";
import { ProtokollResource } from "../Resources";
import { LoadingIndicator } from "./LoadingIndicator";

export function PageProtokoll() {
    const { protokollId } = useParams<{ protokollId: string }>();
    const [protokoll, setProtokoll] = useState<ProtokollResource | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadProtokoll() {
            try {
                if (protokollId) {
                    const data = await getProtokoll(protokollId);
                    setProtokoll(data);
                    setIsLoading(false);
                } 
            } catch (error) { 
                console.error("Protokoll konnte nicht geladen werden", error);
            } 
        }
        loadProtokoll();
    }, [protokollId]);

    if (isLoading) {
        return <LoadingIndicator />;
    }

    if (!protokoll) {
        return <div>Protokoll nicht gefunden</div>;
    }

    return (
        <div>
            <ProtokollDescription protokoll={protokoll} />
            <Link to={`/eintraege/${protokoll.id}`}>Alle EIntraege</Link>
        </div>
    );
}
