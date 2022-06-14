import { 
  Heading,
  Box,
  Tabs,
} from 'react-bulma-components';
import DataGrid from '../../shared/DataGrid';
import './Notifications.scss';

const Notifications = () => {
  return (
    <div className="mon-notification">
      <Heading size={5}>
        Мои уведомления
      </Heading>
      <Box>
        <Tabs>
          <Tabs.Tab active>
            Активные
          </Tabs.Tab>
          <Tabs.Tab>
            Архив
          </Tabs.Tab>
        </Tabs>
        <DataGrid />
      </Box>
    </div>
  )
}

export default Notifications;
