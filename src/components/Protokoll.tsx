import { ProtokollResource } from "../Resources";

export function Protokoll (
    props:  { protokoll: ProtokollResource }
) {
    const protokoll = props.protokoll;

    return (
        <div className="table-responsive">
            <table className="table">
                <caption className="caption-top"><b>Protokoll für {protokoll.patient}</b></caption>
                <tbody>
                <tr>
                    <th scope="row">Patient:</th>
                    <td>{protokoll.patient}</td>
                </tr>
                <tr>
                    <th scope="row">Datum:</th>
                    <td>{protokoll.datum}</td>
                </tr>
                <tr>
                    <th scope="row">Öffentlich:</th>
                    <td>{protokoll.public ? "ja" : "nein"}</td>
                </tr>
                <tr>
                    <th scope="row">Geschlossen:</th>
                    <td>{protokoll.closed ? "ja" : "nein"}</td>
                </tr>
                <tr>
                    <th scope="row">Ersteller:</th>
                    <td>{protokoll.ersteller}</td>
                </tr>
                <tr>
                    <th scope="row">Erstellername:</th>
                    <td>{protokoll.erstellerName}</td>
                </tr>
                <tr>
                    <th scope="row">Zuletzt aktualisiert:</th>
                    <td>{protokoll.updatedAt}</td>
                </tr>
                <tr>
                    <th scope="row">Gesamtmenge:</th>
                    <td>{protokoll.gesamtMenge}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}