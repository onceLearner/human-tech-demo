import Head from 'next/head'
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>HumanTech Version 0.1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center    md:mt-32 mt-10  w-full flex-1 px-20 text-center">
        <h1 className="md:text-6xl text-2xl  font-bold">
          Demo {" "}
          <a className="text-blue-600" href="https://nextjs.org">
            Scrapping
          </a>
        </h1>


        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">

          <Link href="/scrap/single">
            <a
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Scrap une annonce specifique &rarr;</h3>
              <p className="mt-4 text-xl">

                Si vous avez le lien vers l'annonce , Utilisez le pour extraire  les donnees
              </p>
            </a>
          </Link>

          <Link href="/scrap/multiple">
            <a
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Scrap  plusieurs pages &rarr;</h3>
              <p className="mt-4 text-xl">
                Obtenez les liens vers des annonces en scrappant les liens vers les pages d'annonce!
              </p>
            </a>
          </Link>

        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >

          HumanTech Solution @2021
        </a>
      </footer>
    </div>
  )
}
