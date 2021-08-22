import styled from 'styled-components'
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts'
import { setAuthToken } from '../../utils'
import { blackDefault, blueLink, grayLine } from '../../constants'

const HeaderContainer = styled.header`
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid ${grayLine};
`

const HeaderInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50rem;
  margin: 0 auto;
`

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`

const Brand = styled(Link)`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${blackDefault};
  cursor: pointer;
  padding: 0.5rem 1rem;
  line-height: 1.5;

  &:hover {
    color: ${blueLink};
  }
`

const NavbarList = styled.div`
  display: flex;
  align-items: center;
`

const Nav = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.1rem;
  color: ${blackDefault};
  padding: 0.5rem 1rem;
  line-height: 1.5;

  &:hover {
    color: ${blueLink};
  }
`

const activeStyle = {
  color: blueLink
}

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
      <HeaderInnerContainer>
        <LeftContainer>
          <Brand to="/" exact>Large</Brand>
          <NavbarList>
            <Nav to="/list" activeStyle={activeStyle}>文章列表</Nav>
            {user && <Nav to="/new" activeStyle={activeStyle}>發布文章</Nav>}
            <Nav to="/about" activeStyle={activeStyle}>About</Nav>
          </NavbarList>
        </LeftContainer>
        <NavbarList>
          {
            user ?
            <Nav to="/" onClick={handleLogout}>登出</Nav> :
            <>
              <Nav to="/register" activeStyle={activeStyle}>註冊</Nav>
              <Nav to="/login" activeStyle={activeStyle}>登入</Nav>
            </>
          }
        </NavbarList>
      </HeaderInnerContainer>
    </HeaderContainer>
  )
}

export default Header;
