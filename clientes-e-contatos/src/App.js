import "./App.css";
import { useState } from "react";
import ClientCard from "./components/ClientCard";
import ContactCard from "./components/contactCard";

function App() {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataDeRegistro, setDataDeRegistro] = useState("");

  const [nomeCompleto2, setNomeCompleto2] = useState("");
  const [email2, setEmail2] = useState("");
  const [telefone2, setTelefone2] = useState("");

  const [clientes, setClientes] = useState([]);
  const [contatos, setContatos] = useState([]);

const random = () => Math.floor(Math.random() * 100)

  const handleSubmit = (event) => {
    event.preventDefault();
    const cliente = {
      NomeCompleto: nomeCompleto,
      Email: email,
      Telefone: telefone,
      DataDeRegistro: dataDeRegistro,
      Contatos: [],
    };

    setClientes([...clientes, cliente]);

    console.log("clientes ->", clientes);

    setNomeCompleto("");
    setEmail("");
    setTelefone("");
    setDataDeRegistro("");
  };

  const handleSubmit2 = (event) => {
    event.preventDefault();
    const contato = {
      NomeCompleto2: nomeCompleto2,
      Email2: email2,
      Telefone2: telefone2,
    };

    setContatos([...contatos, contato]);

    console.log("contatos ->", contatos);

    setNomeCompleto2("");
    setEmail2("");
    setTelefone2("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <header id="header">Clientes e Contatos</header>

        <nav id="navBar"></nav>

        <div id="vitrinesContainer">
          <div id="vitrineClientes">
            <form className="form" onSubmit={handleSubmit}>
              <h4>Cadastrar Cliente:</h4>

              <label>Nome Completo: </label>
              <input
                className="campo"
                type="text"
                name="NomeCompleto"
                onChange={(event) => setNomeCompleto(event.target.value)}
                value={nomeCompleto}
              ></input>

              <label>Email: </label>
              <input
                className="campo"
                type="email"
                name="Email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              ></input>

              <label>Telefone: </label>
              <input
                className="campo"
                type="number"
                name="Telefone"
                onChange={(event) => setTelefone(event.target.value)}
                value={telefone}
              ></input>

              <label>Data de Registro: </label>
              <input
                className="campo"
                type="date"
                name="DataDeRegistro"
                onChange={(event) => setDataDeRegistro(event.target.value)}
                value={dataDeRegistro}
              />

              <button className="submitButton" type="submit">
                cadastrar cliente
              </button>
            </form>

            <ul className="listaClientes">
              <h4>Clientes Cadastrados: </h4>
              {!!clientes &&
                clientes.map((cliente, index) => {
                  return (
                    <>
                      <ClientCard key={index} cliente={cliente}  />
                    </>
                  );
                })}
            </ul>
          </div>

          <div id="vitrineContatos">
            <form className="form" onSubmit={handleSubmit2}>
              <h4>Cadastrar Contato:</h4>

              <label>Nome Completo: </label>
              <input
                className="campo"
                type="text"
                name="NomeCompleto2"
                onChange={(event) => setNomeCompleto2(event.target.value)}
                value={nomeCompleto2}
              ></input>

              <label>Email: </label>
              <input
                className="campo"
                type="email"
                name="Email2"
                onChange={(event) => setEmail2(event.target.value)}
                value={email2}
              ></input>

              <label>Telefone: </label>
              <input
                className="campo"
                type="number"
                name="Telefone2"
                onChange={(event) => setTelefone2(event.target.value)}
                value={telefone2}
              ></input>

              <button className="submitButton" type="submit">
                cadastrar contato
              </button>
            </form>

            <ul className="listaClientes">
              <h4>Contatos Cadastrados: </h4>
              {!!contatos &&
                contatos.map((contato) => {
                  return (
                    <>
                      <ContactCard key={()=> random()} contato={contato} />
                    </>
                  );
                })}
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
