import React, { useState } from 'react';
import './App.css';

const opcoes = ['Pedra', 'Papel', 'Tesoura'];

const App = () => {
  const [escolhaUsuario, setEscolhaUsuario] = useState('');
  const [escolhaComputador, setEscolhaComputador] = useState('');
  const [resultado, setResultado] = useState('');
  const [vitoriasUsuario, setVitoriasUsuario] = useState(0);
  const [vitoriasComputador, setVitoriasComputador] = useState(0);
  const [empates, setEmpates] = useState(0);
  const [jogoFinalizado, setJogoFinalizado] = useState(false);
  const [jogadaFeita, setJogadaFeita] = useState(false);

  const aoClicar = (escolha) => {
    if (jogoFinalizado || jogadaFeita) return;

    const escolhaAleatoria = opcoes[Math.floor(Math.random() * opcoes.length)];
    setEscolhaUsuario(escolha);
    setEscolhaComputador(escolhaAleatoria);
    determinarVencedor(escolha, escolhaAleatoria);
    setJogadaFeita(true);
  };

  const determinarVencedor = (usuario, computador) => {
    if (usuario === computador) {
      setResultado('Empate!');
      setEmpates(empates + 1);
    } else if (
      (usuario === 'Pedra' && computador === 'Tesoura') ||
      (usuario === 'Papel' && computador === 'Pedra') ||
      (usuario === 'Tesoura' && computador === 'Papel')
    ) {
      setResultado('Você ganhou!');
      setVitoriasUsuario(vitoriasUsuario + 1);
    } else {
      setResultado('Você perdeu!');
      setVitoriasComputador(vitoriasComputador + 1);
    }
  };

  const reiniciarJogo = () => {
    setEscolhaUsuario('');
    setEscolhaComputador('');
    setResultado('');
    setJogadaFeita(false);
    setJogoFinalizado(false);
  };

  const finalizarJogo = () => {
    setJogoFinalizado(true);
  };

  return (
    <div className="App">
      <h1 className="jokenpo">JOKENPÔ!</h1>
      <div className="Jogadas">
      <div >
        {opcoes.map((opcao) => (
          <button key={opcao} onClick={() => aoClicar(opcao)} disabled={jogadaFeita}>
            {opcao}
          </button>
        ))}
      </div>

      {escolhaUsuario && escolhaComputador && (
        <div className="Escolhas">
          <p>Você escolheu: {escolhaUsuario}</p>
          <p>Computador escolheu: {escolhaComputador}</p>
          <h2>{resultado}</h2>
        </div>
      
      )}
      </div>

      <div className="Placar">
        <h3>Placar</h3>
        <div>
        <p>Vitórias do Jogador: {vitoriasUsuario}</p>
        <p>Vitórias do Computador: {vitoriasComputador}</p>
        <p>Empates: {empates}</p>
        </div>
      </div>

      <div className="botoes">
        <button onClick={finalizarJogo} disabled={!jogadaFeita}>Finalizar Jogo</button>
        <button onClick={reiniciarJogo}>Jogar Novamente</button>
      </div>

      {jogoFinalizado && (
        <div className='resultadoFinal'>
          <h2>Resultado Final</h2>
          <p>
            {vitoriasUsuario > vitoriasComputador
              ? 'Você é o grande vencedor!'
              : vitoriasUsuario < vitoriasComputador
              ? 'O Computador venceu!'
              : 'O jogo terminou empatado!'}
          </p>
        </div>
      )}
    </div>

    // Se vc leu isso sandrinha, saiba que estou tentando aprender coisas novas no react e gostei mto de como ficou, amei esse trabalho! S2

  );
};

export default App;
