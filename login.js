import { useState } from 'react'

export default function Login() {
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin = () => {
    if (password === 'evtrade') setLoggedIn(true)
    else alert('Грешна парола')
  }

  return (
    <div style={{ textAlign: 'center', marginTop: 100 }}>
      {loggedIn ? (
        <h2>Успешен вход!</h2>
      ) : (
        <>
          <h2>Вход с парола</h2>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <button onClick={handleLogin} style={{ marginLeft: 10 }}>Влез</button>
        </>
      )}
    </div>
  )
}