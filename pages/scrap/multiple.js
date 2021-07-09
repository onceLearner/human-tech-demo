import React from 'react'
import Head from "next/head"
import Link from "next/link"

const Multiple = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>HumanTech Version 0.1</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col  w-full flex-1 px-20 ">

                <Link href="/">
                    <div className="hover:text-blue-600 cursor-pointer  " >
                        &#8592;
                        retour
                    </div>
                </Link>


                <div className="w-full h-full">

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

export default Multiple
