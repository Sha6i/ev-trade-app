import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: 100 }}>
      <Head>
        <title>EV Trade</title>
      </Head>
      <img src="/logo.png" alt="EV Logo" width="100" />
      <h1>Welcome to EV Trade</h1>
      <Link href="/login">Вход</Link>
    </div>
  )
}