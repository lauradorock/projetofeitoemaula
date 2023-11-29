import React, { useState } from 'react';

function Postagem() {
  const [comentarios, setComentarios] = useState([]);
  const [novoComentario, setNovoComentario] = useState('');
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const adicionarComentario = () => {
    if (novoComentario.trim() !== '') {
      setComentarios([...comentarios, { text: novoComentario }]);
      setNovoComentario('');
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => setMostrarFormulario(!mostrarFormulario)}>
          Comentar
        </button>
      </div>

      {mostrarFormulario && (
        <div>
          <input
            type="text"
            placeholder="Digite seu comentário"
            value={novoComentario}
            onChange={(e) => setNovoComentario(e.target.value)}
          />
          <button onClick={adicionarComentario}>Enviar Comentário</button>
        </div>
      )}

      {comentarios.length > 0 && (
        <ul>
          {comentarios.map((comentario, comentarioIndex) => (
            <li key={comentarioIndex}>{comentario.text}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Postagem;
