import "./index.css";
export default function ClientCard({ cliente, onClick }) {
  return (
    <>
      <li id="clientCard">
        <h4>Nome Completo: {cliente.NomeCompleto}</h4>
        <h4>Email: {cliente.Email}</h4>
        <h4>Telefone: {cliente.Telefone}</h4>
        <h4>Data De Registro: {cliente.DataDeRegistro}</h4>
        <h4>Contatos: {cliente.Contatos}</h4>
        <button>Editar Cliente</button>
        <button onClick={onClick} >Deletar Cliente</button>
      </li>
    </>
  );
}
