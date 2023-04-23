import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { LogoContainer, NavLinks, NavLink, NavigationContainer } from './navigation.styles';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutStart } from '../../store/user/user.action';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const signOut = async () => {
    dispatch(signOutStart());
  }
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
            <NavLink onClick={signOut}>SIGN OUT</NavLink> 
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