import { EintragResource } from "../Resources";
import { Link } from 'react-router-dom';


export function Eintraege(props: { eintraege: EintragResource[] }) {
  const eintraege = props.eintraege;

  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <caption className="caption-top"><b>Alle Einträge</b></caption>
        <thead >
          <tr>
            <th scope="col">Getränk</th>
            <th scope="col">Menge</th>
            <th scope="col">Datum</th>
            <th scope="col">Ersteller</th>
            <th scope="col">Aktionen</th>
          </tr>
        </thead>
        <tbody>
          {eintraege.map((eintrag, index) => (
            <tr key={index}>
              <td>{eintrag.getraenk}</td>
              <td>{eintrag.menge}</td>
              <td>{eintrag.createdAt}</td>
              <td>{eintrag.ersteller}</td>
              <td>
                <Link to={`/eintrag/${eintrag.id}`} className="btn btn-primary">
                  Bearbeiten
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
