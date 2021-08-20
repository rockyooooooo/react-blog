import { useContext, useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { login, getMe } from '../../WebAPI'
import { setAuthToken } from '../../utils'
import { AuthContext } from '../../contexts'

const ErrorMessage = styled.h2`
  color: red;
`

const LoginPage = () => {
  const { setUser } = useContext(AuthContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const history = useHistory()

  const handleSubmit = async(e) => {
    e.preventDefault()
    setErrorMessage(null)

    const loginResponse = await login(username, password)
    const {  message, token } = loginResponse
    if (!loginResponse.ok) {
      setErrorMessage(message)
      return
    }
    setAuthToken(token)

    const getMeResponse = await getMe()
    const { data } = getMeResponse
    if (!getMeResponse.ok) {
      setAuthToken(null)
      setErrorMessage(data)
      return
    }
    setUser(data)
    history.push('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        username: 
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        password: 
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button>登入</button>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </form>
  )
}

export default LoginPage;
