import { useEffect, useState } from "react";
import { ProtokollResource } from "../Resources";
import { getAlleProtokolle } from "../backend/api";
import { ProtokollDescription } from "./ProtokollDescription";
import { LoadingIndicator } from "./LoadingIndicator";
import { Link } from "react-router-dom";
import { useErrorBoundary } from "react-error-boundary";

export function AlleProtokolle() {
    const [alleProtokolle, setAlleProtokolle] = useState<ProtokollResource[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const {showBoundary} = useErrorBoundary();

    useEffect(() => {
        async function load() {
            try {
                const protokolle = await getAlleProtokolle();
                setAlleProtokolle(protokolle);
                setIsLoading(false);
            } catch (error) { 
              showBoundary(error);
            } 
        }
        load();
    }, []); 

    if (isLoading) {
        return <LoadingIndicator />;
    }

    return (
        <div className="container mt-4">
        <div className="row">
          {alleProtokolle!.map((p) => (
            <div key={p.id} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <ProtokollDescription protokoll={p} />
                  <Link to={`/protokoll/${p.id}`} className="btn btn-primary mt-2">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}