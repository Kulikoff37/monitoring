import {
  Table
} from 'react-bulma-components';

const DataGrid = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th>
            <abbr title="Number">
              Номер
            </abbr>
          </th>
          <th>
            Текст
          </th>
          <th>
            Источник
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            1
          </th>
          <td>
            <strong>
              Что-то случилось
            </strong>
          </td>
          <td>
            Telegram
          </td>
        </tr>
        <tr>
          <th>
            2
          </th>
          <td>
            <strong>
              Что-то опять случилось
            </strong>
          </td>
          <td>
            Instagram
          </td>
        </tr>
      </tbody>
    </Table>
  )
}

export default DataGrid;
