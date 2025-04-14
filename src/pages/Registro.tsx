import React, { useState } from 'react';
import Modal from '../components/Modal';

export function Registro(){
  const [isModalOpen, setIsModalOpen] = useState(false);
  const[modoModal, setModoModal]= useState<"novo" | "editar"|"excluir">("novo");
  const abrirModalNovo =()=>{
    setModoModal("novo");
    setIsModalOpen(true);
  }
  const abrirModalEditar =() => {
    setModoModal("editar");
    setIsModalOpen(true);
  }
  const abrirModalExcluir=()=>{
    setModoModal("excluir");
    setIsModalOpen(true);
  }


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
            <td><button id = "btedit" onClick={abrirModalEditar}> Editar</button>
            <button id = "btdel" onClick ={abrirModalExcluir}>Deletar</button></td>
          </tr>

          <tr>
            <td>2</td>
            <td>Recebimento de Cliente</td>
            <td>08/12/2024</td>
            <td>12:23</td>
            <td>1500,00</td>
            <td>Recebido</td>
            <td><button id = "btedit"onClick={abrirModalEditar}> Editar</button>
            <button id = "btdel" onClick ={abrirModalExcluir}>Deletar</button></td>
          </tr>

          <tr>
            <td>3</td>
            <td>Pagamento de Serviços</td>
            <td>07/05/2024</td>
            <td>10:30</td>
            <td>750,00</td>
            <td>Pago</td>
            <td><button id = "btedit" onClick={abrirModalEditar}> Editar</button>
            <button id = "btdel" onClick ={abrirModalExcluir}>Deletar</button></td>
          </tr>

          <tr>
            <td>4</td>
            <td>Recebimento de Cliente</td>
            <td>07/05/2024</td>
            <td>9:45</td>
            <td>650,00</td>
            <td>Recebido</td>
            <td><button id = "btedit" onClick={abrirModalEditar}> Editar</button>
            <button id = "btdel" onClick ={abrirModalExcluir}>Deletar</button></td>
          </tr>

          <tr>
            <td>5</td>
            <td>Pagamento de impostos</td>
            <td>06/05/2024</td>
            <td>15:27</td>
            <td>1345,23</td>
            <td>Pago</td>
            <td><button id = "btedit" onClick={abrirModalEditar}> Editar</button>
            <button id = "btdel" onClick ={abrirModalExcluir}>Deletar</button></td>
          </tr>

          <tr>
            <td>6</td>
            <td>Pagamento de emolumentos</td>
            <td>06/05/2024</td>
            <td>12:30</td>
            <td>850,00</td>
            <td>Pago</td>
            <td><button id = "btedit" onClick={abrirModalEditar}> Editar</button>
            <button id = "btdel" onClick ={abrirModalExcluir}>Deletar</button></td>
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
        <button className="novo-lancamento"  onClick={abrirModalNovo}>Novo lançamento</button>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
    titulo={
      modoModal === "novo" ? "Novo lançamento" : modoModal=== "editar" ? "Editar":  "Excluir"}
    >
      {modoModal==="excluir" ? (
        <div style={{textAlign:"center"}}> <p>Você tem certeza que deseja excluir esse registro?</p></div>
      ): (
        <form>
          <div>
            <label>Descrição</label>
            <input type="text" />
          </div>
          <div>
            <label>Data</label>
            <input type="date" />
          </div>
          <div>
            <label>Hora</label>
            <input type="time" />
          </div>
          <div>
            <label>Valor</label>
            <input type="number" />
          </div>
          <div>
            <label>
              <input type="radio" name="tipo" value="Pago" /> Pago
            </label>
            <label>
              <input type="radio" name="tipo" value="Recebido" /> Recebido
            </label>
          </div>
        </form>
      )}
      </Modal>
    </section>
  );
}
