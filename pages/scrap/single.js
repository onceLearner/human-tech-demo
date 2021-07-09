import React, { useState, useEffect } from 'react'
import Head from "next/head"
import Link from "next/link"

const Single = () => {


    const [url, setUrl] = useState("")


    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>HumanTech Version 0.1</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col w-full   flex-1 md:p-6 p-1  ">
                <Link href="/">
                    <div className="hover:text-blue-600 cursor-pointer  text-gray-500 font-semibold " >
                        &#8592;
                        back
                    </div>
                </Link>


                <div className="flex flex-col space-y-9 items-center w-full py-10  md:p-10 text-center p-2">

                    <h1 className="text-lg md:text-2xl font-medium text-gray-=800 "> Scrapper les donnees relatives a une annonce particulier </h1>

                    <div className="flex  md:flex-row md:border flex-col items-center md:space-y-0 space-y-9  justify-between rounded-lg w-full md:w-4/5 ">

                        <input onChange={(e) => setUrl(e.target.value)} className="rounded-lg md:border-0 border p-3 flex-auto md:w-auto w-full" placeholder="lien vers la page d'annonce" />

                        <button className="bg-gray-800 w-60   hover:opacity-60 font-medium text-sm md:text-base  md:rounded-r-lg rounded-r-lg md:rounded-l-none rounded-l-lg  p-3 text-gray-200 ">
                            Lancer Le Scrap
                        </button>



                    </div>

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

export default Single