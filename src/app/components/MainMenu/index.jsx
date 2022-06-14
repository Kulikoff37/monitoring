import { Menu } from 'react-bulma-components';
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import classnames from 'classnames';
import './MainMenu.scss';

const MainMenu = () => {
  const { open } = useSelector(({ menu }) => menu);
  return (
    <div className={classnames(
      'mon-menu',
      open && 'active'
      )}>
      <Menu>
        <Menu.List>
          <Link to="/notifications">      
            Мои уведомления
          </Link>
          <Link to="/users">
            Пользователи
          </Link>
        </Menu.List>
      </Menu>
    </div>
  )
}

export default MainMenu;
