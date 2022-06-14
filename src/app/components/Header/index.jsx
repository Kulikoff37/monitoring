import { Navbar, Heading } from 'react-bulma-components';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../store/mainMenuSlice';
import './Header.scss';

const Header = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector(({ user }) => user)
  return (
    <Navbar className="mon-header">
       <Navbar.Brand className="mon-header-text">
          <Heading
            size={5}
            className="mon-header-title"
          >
            Система мониторинга и отправки уведомлений
          </Heading>
       </Navbar.Brand>
       {isAuth && (
        <button 
          className="navbar-burger mon-main-menu"
          onClick={() => dispatch(toggleMenu())}
          >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
       )}
    </Navbar>
  )
}

export default Header;
