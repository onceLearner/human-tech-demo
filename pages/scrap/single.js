import React, { useState, useEffect } from 'react'
import Head from "next/head"
import Link from "next/link"
import axios from 'axios'
import { right_url } from '../../utils/function'
import { useRouter } from 'next/dist/client/router'


/**
 * 
 * @param {Event} e  
 * @param {String} url 
 */
const handle_submit = (e, url, setLoading, setMessage) => {

    e.preventDefault()

    setMessage({
        status: null,
        data: null
    })
    setLoading(true)
    axios.get(right_url("/scrap/oneJob?url=" + url))
        .then(res => {
            setMessage({
                status: true,
                data: res.data
            })
            setLoading(false)
            console.log({ data: res.data })
        })
        .catch(er => {
            setMessage({
                status: false,
                data: "error"
            })
            setLoading(false)
            console.error({ er })
        }
        )



}



const Single = () => {


    const router = useRouter()

    const [url, setUrl] = useState(null)
    console.log({ data: url })
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState({
        status: null,
        data: null
    })

    useEffect(() => {
        if (process.browser) {
            if (!window.location.href.toString().includes("url"))
                setUrl("")
            else setUrl(router.query.url)
        }

    }, [])

    if (url == null)
        return <p>loading...</p>

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

                    <form onSubmit={(e) => handle_submit(e, url, setLoading, setMessage)} className="flex  md:flex-row md:border flex-col items-center md:space-y-0 space-y-9  justify-between rounded-lg w-full md:w-4/5 ">


                        <input value={url}
                            required onChange={(e) => setUrl(e.target.value)} className="rounded-lg md:border-0 border p-3 flex-auto md:w-auto w-full" placeholder="lien vers la page d'annonce" />

                        <button
                            type="submit"

                            className="bg-gray-800 w-60   hover:opacity-60 font-medium text-sm md:text-base  md:rounded-r-lg rounded-r-lg md:rounded-l-none rounded-l-lg  p-3 text-gray-200 ">
                            Lancer Le Scrap
                        </button>



                    </form>

                    <div>

                        {
                            loading &&
                            <div className="flex space-x-4">
                                <svg className="h-8 w-8 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                                <p>
                                    Scrapping en cours
                                </p>
                            </div>
                        }

                        {

                            message.status == false &&
                            <div>
                                <p className="text-lg md:text-xl text-red-600 ">Une erreur est survenue!</p>
                            </div>





                        }

                        {
                            message.status == true &&
                            <div>
                                <p>success</p>

                                <p>Data scrapped:</p>

                                <div className="flex flex-col ">
                                    {Object.keys(message.data).map(item => (
                                        <div className="flex  items-center space-x-6">
                                            <p className="text-sm text-gray-600 ">{item}</p>
                                            <div>
                                                {
                                                    (typeof message.data[item] === 'object' && message.data[item] !== null)
                                                        ?
                                                        Object.keys(message.data[item]).map(elt => (
                                                            <span
                                                                className="flex  items-center space-x-6"
                                                            >
                                                                <p className="text-sm text-gray-600">{elt}</p>
                                                                <p>{message.data[item][elt]}</p>
                                                            </span>)
                                                        )
                                                        :
                                                        <p>{message.data[item].toString()}</p>
                                                }
                                            </div>
                                        </div>))
                                    }
                                </div>
                            </div>
                        }
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