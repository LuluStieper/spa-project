import { ProtokollResource } from "../Resources";

export function ProtokollDescription (
    props:  { protokoll: ProtokollResource }
) {
    const protokoll = props.protokoll;

    return (
        <div>

            <table>
                <caption><b>Protokoll für {protokoll.patient}</b></caption>
                <tbody>
                    <tr>
                        <th>Patient:</th>
                        <td>{protokoll.patient}</td>
                    </tr>
                    <tr>
                        <th>Datum:</th>
                        <td>{protokoll.datum}</td>
                    </tr>
                    <tr>
                        <th>Öffentlich:</th>
                        <td>{ (protokoll.public) ? "ja" : "nein"}</td>
                    </tr>
                    <tr>
                        <th>Geschlossen:</th>
                        <td>{ (protokoll.closed) ? "ja" : "nein"}</td>
                    </tr>
                    <tr>
                        <th>Ersteller:</th>
                        <td>{protokoll.ersteller}</td>
                    </tr>
                    <tr>
                        <th>Erstellername:</th>
                        <td>{protokoll.erstellerName}</td>
                    </tr>
                    <tr>
                        <th>Zuletzt aktualisiert:</th>
                        <td>{protokoll.updatedAt}</td>
                    </tr>
                    <tr>
                        <th>Gesamtmenge:</th>
                        <td>{protokoll.gesamtMenge}</td>
                    </tr>
                </tbody>
            </table>
            <br />

        </div>
    )
}