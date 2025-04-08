// page/Registro.tsx
export function Registro() {
  return (
    <section className="page">
      <h2 className="page-title"></h2>
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
            <td>Editar | Deletar</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Recebimento de Cliente</td>
            <td>08/12/2024</td>
            <td>12:23</td>
            <td>1500,00</td>
            <td>Recebido</td>
            <td>Editar | Deletar</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Pagamento de Serviços</td>
            <td>07/05/2024</td>
            <td>10:30</td>
            <td>750,00</td>
            <td>Pago</td>
            <td>Editar | Deletar</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Recebimento de Cliente</td>
            <td>07/05/2024</td>
            <td>9:45</td>
            <td>650,00</td>
            <td>Recebido</td>
            <td>Editar | Deletar</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
