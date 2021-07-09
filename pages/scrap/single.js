import React from 'react'
import Head from "next/head"
import Link from "next/link"

const Single = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>HumanTech Version 0.1</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col w-full   flex-1 p-6  ">
                <Link href="/">
                    <div className="hover:text-blue-600 cursor-pointer  text-gray-700 font-semibold " >
                        &#8592;
                        back
                    </div>
                </Link>


                <div className="flex flex-col space-y-9 items-center w-full  md:p-10 text-center p-2">

                    <h1 className="text-lg md:text-2xl font-medium text-gray-=800 "> Scrapper les donnez relatives a une annonce particulier </h1>

                    <div className="flex justify-between border rounded-lg w-full md:w-2/3 ">

                        <input className="rounded-lg p-3 flex-1" placeholder="lien vers la page d'annonce" />

                        <button className="bg-gray-800 hover:opacity-60  rounded-r-lg  p-3 text-gray-200 ">
                            Lancer le Scrap
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