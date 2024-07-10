import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getAlleEintraege, getProtokoll } from "../backend/api";
import { ProtokollDescription } from "./ProtokollDescription";
import { EintragResource, ProtokollResource } from "../Resources";
import { LoadingIndicator } from "./LoadingIndicator";
import { Eintrag } from "./Eintrag";
import { Protokoll } from "./Protokoll";
import { Eintraege } from "./Eintraege";
import { useErrorBoundary } from "react-error-boundary";

export function PageProtokoll() {
    const { protokollId } = useParams<{ protokollId: string }>();
    const [protokoll, setProtokoll] = useState<ProtokollResource | null>(null);
    const [eintraege, setEintraege] = useState<EintragResource[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const {showBoundary} = useErrorBoundary();

    useEffect(() => {
        async function loadProtokoll() {
            try {
                if (protokollId) {
                    const data_protokoll = await getProtokoll(protokollId);
                    setProtokoll(data_protokoll);

                    const data_eintraege = await getAlleEintraege(protokollId);
                    setEintraege(data_eintraege);

                    setIsLoading(false);
                } 
            } catch (error) { 
                showBoundary(error);
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

    if (!eintraege) {
        return <div>Eintraege nicht gefunden</div>;
    }

    let anzahl = eintraege.length;

    return (
        <div className="container mt-4">
            <Protokoll protokoll={protokoll} />
            <Eintraege eintraege={eintraege} />
            <Link to="/" className="btn btn-primary mt-3">
                Zurück zur Übersicht
            </Link>
        </div>
    );
}
