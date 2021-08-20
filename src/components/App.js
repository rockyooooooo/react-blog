import { useEffect, useState } from 'react'
import styled from 'styled-components'
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Header from './Header'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import PostPage from '../pages/PostPage'
import { AuthContext } from '../contexts'
import { getMe } from '../WebAPI'
import { getAuthToken } from '../utils'

const Root = styled.div`
 padding-top: 4rem;
`

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // todo: 有 token 才 call api
    const token = getAuthToken()
    if (!token) return
    getMe().then((response) => {
      const { ok, data } = response
      if (!ok) {
        console.log(data)
        return
      }
      setUser(data)
    })
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Root>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/posts/:id">
              <PostPage />
            </Route>
          </Switch>
        </Router>
      </Root>
    </AuthContext.Provider>
  );
}

export default App;
