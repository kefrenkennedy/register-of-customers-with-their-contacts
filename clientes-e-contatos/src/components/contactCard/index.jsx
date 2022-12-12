import "./index.css";
export default function ContactCard({ contato, onClick }) {
  return (
    <>
      <li id="contactCard">
        <h4>Nome Completo: {contato.NomeCompleto2}</h4>
        <h4>Email: {contato.Email2}</h4>
        <h4>Telefone: {contato.Telefone2}</h4>
        <button>Editar contato</button>
        <button onClick={onClick}>Deletar contato</button>
      </li>
    </>
  );
}
