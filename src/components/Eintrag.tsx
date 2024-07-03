import { EintragResource, ProtokollResource } from "../Resources";

export function Eintrag (
    props:  { eintrag: EintragResource }
) {
    const eintrag = props.eintrag;

    return (
        <div>

            <table>
                <caption><b>Eintrag für {eintrag.protokoll}</b></caption>
                <tbody>
                    <tr>
                        <th>Getraenk:</th>
                        <td>{eintrag.getraenk}</td>
                    </tr>
                    <tr>
                        <th>Menge:</th>
                        <td>{eintrag.menge}</td>
                    </tr>
                    <tr>
                        <th>Kommentar:</th>
                        <td>{eintrag.kommentar}</td>
                    </tr>
                    <tr>
                        <th>Ersteller:</th>
                        <td>{eintrag.ersteller}</td>
                    </tr>
                    <tr>
                        <th>Erstellername:</th>
                        <td>{eintrag.erstellerName}</td>
                    </tr>
                    <tr>
                        <th>Erstellt am:</th>
                        <td>{eintrag.createdAt}</td>
                    </tr>
                    <tr>
                        <th>Protokoll:</th>
                        <td>{eintrag.protokoll}</td>
                    </tr>
                </tbody>
            </table>
            <br />

        </div>
    )
}