import Head from 'next/head'
import Styles from '../styles/index.module.css'

export default function Home({data}) {
  return (
    <>
    <div class={Styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div class={Styles.yes}>
          <h1> Page</h1> 
          <h1>{data.value}</h1>
        </div>
      </main>
      <style jsx global>{`
        html,
        body {
          background-color: black;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
      `}</style>
        </div>
      
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://api.countapi.xyz/hit/**domain**/**random string**")
  const data = await res.json()
  return {
    props: {
      data: data
    }
  }
}
