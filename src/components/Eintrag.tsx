import { EintragResource } from "../Resources";

export function Eintrag(props: { eintrag: EintragResource }) {
  const eintrag = props.eintrag;

  return (
    <div className="container mt-3">
      <table className="table table-striped">
        <caption className="caption-top"><b>Eintrag für {eintrag.protokoll}</b></caption>
        <tbody>
          <tr>
            <th scope="row" className="col-md-3">Getränk:</th>
            <td className="col-md-9">{eintrag.getraenk}</td>
          </tr>
          <tr>
            <th scope="row">Menge:</th>
            <td>{eintrag.menge}</td>
          </tr>
          <tr>
            <th scope="row">Kommentar:</th>
            <td>{eintrag.kommentar}</td>
          </tr>
          <tr>
            <th scope="row">Ersteller:</th>
            <td>{eintrag.ersteller}</td>
          </tr>
          <tr>
            <th scope="row">Erstellername:</th>
            <td>{eintrag.erstellerName}</td>
          </tr>
          <tr>
            <th scope="row">Erstellt am:</th>
            <td>{eintrag.createdAt}</td>
          </tr>
          <tr>
            <th scope="row">Protokoll:</th>
            <td>{eintrag.protokoll}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
