import styled from 'styled-components'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts'
import { setAuthToken } from '../../utils'

const HeaderContainer = styled.header`
  background: white;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0 2rem;
`

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
`

const Brand = styled.h1``

const NavbarList = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
`

const Nav = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 6rem;
  cursor: pointer;
  color: inherit;

  background: ${(props) => props.$active ? '#75757575' : ''}
`

const Header = () => {
  const { user, setUser } = useContext(AuthContext)
  const location = useLocation()
  const history = useHistory()

  const handleLogout = () => {
    setAuthToken(null)
    setUser(null)
    if (location.pathname !== '/') {
      history.push('/')
    }
  }

  return (
    <HeaderContainer>
      <LeftContainer>
        <Brand>Large</Brand>
        <NavbarList>
          <Nav to="/" $active={location.pathname === '/'}>首頁</Nav>
          <Nav to="/list" $active={location.pathname === '/list'}>文章列表</Nav>
          {user && <Nav to="/new" $active={location.pathname === '/new'}>發布文章</Nav>}
          <Nav to="/about" $active={location.pathname === '/about'}>About</Nav>
        </NavbarList>
      </LeftContainer>
      <NavbarList>
        {
          user ?
          <Nav to="/" onClick={handleLogout}>登出</Nav> : 
          (<>
            <Nav to="/register" $active={location.pathname === '/register'}>註冊</Nav>
            <Nav to="/login" $active={location.pathname === '/login'}>登入</Nav>
          </>)
        }
      </NavbarList>
    </HeaderContainer>
  )
}

export default Header;
