import React, { useState } from 'react';
import { Modal } from '../components/Modal';

export function Registro() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="page">
      <h2 className="page-title"></h2>

      <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Descrição</th>
            <th>Data</th>
            <th>Hora</th>
            <th>Valor (R$)</th>
            <th>Tipo</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>1</td>
            <td>Compra Material de Escritório</td>
            <td>08/12/2024</td>
            <td>14:00</td>
            <td>200,00</td>
            <td>Pago</td>
            <td><a href="#">Editar</a> | <a href="#">Deletar</a></td>
          </tr>

          <tr>
            <td>2</td>
            <td>Recebimento de Cliente</td>
            <td>08/12/2024</td>
            <td>12:23</td>
            <td>1500,00</td>
            <td>Recebido</td>
            <td><a href="#">Editar</a> | <a href="#">Deletar</a></td>
          </tr>

          <tr>
            <td>3</td>
            <td>Pagamento de Serviços</td>
            <td>07/05/2024</td>
            <td>10:30</td>
            <td>750,00</td>
            <td>Pago</td>
            <td><a href="#">Editar</a> | <a href="#">Deletar</a></td>
          </tr>

          <tr>
            <td>4</td>
            <td>Recebimento de Cliente</td>
            <td>07/05/2024</td>
            <td>9:45</td>
            <td>650,00</td>
            <td>Recebido</td>
            <td><a href="#">Editar</a> | <a href="#">Deletar</a></td>
          </tr>

          <tr>
            <td>5</td>
            <td>Pagamento de impostos</td>
            <td>06/05/2024</td>
            <td>15:27</td>
            <td>1345,23</td>
            <td>Pago</td>
            <td><a href="#">Editar</a> | <a href="#">Deletar</a></td>
          </tr>

          <tr>
            <td>6</td>
            <td>Pagamento de emolumentos</td>
            <td>06/05/2024</td>
            <td>12:30</td>
            <td>850,00</td>
            <td>Pago</td>
            <td><a href="#">Editar</a> | <a href="#">Deletar</a></td>
          </tr>
        </tbody>
      </table>
      </div>

      <div className="infopart">
        <div>
          <label>Total de pagos</label>
          <input type="number" placeholder="3145,23" />
        </div>
        <div>
          <label>Total de recebidos</label>
          <input type="number" placeholder="2150,00" />
        </div>
        <div>
          <label>Saldo</label>
          <input type="number" placeholder="945,42" />
        </div>
        <button className="novo-lancamento" onClick={() => setShowModal(true)}>
          Novo lançamento
        </button>
      </div>

      {/* Modal */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
}
