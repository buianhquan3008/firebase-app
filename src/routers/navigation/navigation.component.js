import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { LogoContainer, NavLinks, NavLink, NavigationContainer } from './navigation.styles';
import { signOutUser } from '../../utils/firebase.util';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
 
  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          {currentUser ? 
            <NavLink onClick={signOutUser}>SIGN OUT</NavLink> 
            :
            <NavLink to='/auth'>SIGN IN</NavLink>
          }
        </NavLinks>
        {/* <CartIcon /> */}
      </NavigationContainer>
      <Outlet />
    </>
  )
}

export default Navigation;