import React, { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ isOpen, onClose }: ModalProps) {
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState<'pago' | 'recebido' | null>(null);

  if (!isOpen) return null;

  const handleSalvar = () => {
    // Aqui você pode salvar os dados (ou chamar uma função prop)
    console.log({ descricao, data, hora, valor, tipo });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Novo lançamento</h2>

        <div className="modal-form">
          <label>Descrição</label>
          <input
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Descrição"
          />

          <div className="modal-row">
            <div>
              <label>Data</label>
              <input type="date" value={data} onChange={(e) => setData(e.target.value)} />
            </div>
            <div>
              <label>Hora</label>
              <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} />
            </div>
          </div>

          <label>Valor</label>
          <input
            type="number"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            placeholder="R$"
          />

          <div className="modal-checkboxes">
            <label>
              <input
                type="checkbox"
                checked={tipo === 'pago'}
                onChange={() => setTipo(tipo === 'pago' ? null : 'pago')}
              />
              Pago
            </label>
            <label>
              <input
                type="checkbox"
                checked={tipo === 'recebido'}
                onChange={() => setTipo(tipo === 'recebido' ? null : 'recebido')}
              />
              Recebido
            </label>
          </div>

          <div className="modal-buttons">
            <button onClick={handleSalvar} className="btn salvar">Salvar</button>
            <button onClick={onClose} className="btn cancelar">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
