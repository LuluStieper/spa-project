import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { EintragResource } from "../Resources";
import { getEintrag } from "../backend/api";
import { LoadingIndicator } from "./LoadingIndicator";
import { Eintrag } from "./Eintrag";
import { useErrorBoundary } from "react-error-boundary";

export function PageEintrag() {
    const { eintragId } = useParams<{ eintragId: string }>();
    const [eintrag, setEintrag] = useState<EintragResource | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const {showBoundary} = useErrorBoundary();

    useEffect(() => {
        async function loadProtokoll() {
            try {
                if (eintragId) {
                    const data = await getEintrag(eintragId);
                    setEintrag(data);
                    setIsLoading(false);
                } 
            } catch (error) { 
                showBoundary(error);
            } 
        }
        loadProtokoll();
    }, [eintragId]);

    if (isLoading) {
        return <LoadingIndicator />;
    }

    if (!eintrag) {
        return <div>Protokoll nicht gefunden</div>;
    }

    return (
        <div className="container mt-4">
            <Eintrag eintrag={eintrag}></Eintrag>
            <Link to={`/protokoll/${eintrag.protokoll}`}  className="btn btn-primary mt-2">Zurück zum Protokoll</Link>
        </div>
    );
}