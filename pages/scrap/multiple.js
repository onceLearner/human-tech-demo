import React, { useState, useEffect } from 'react'
import Head from "next/head"
import Link from "next/link"
import axios from 'axios'
import { right_url } from '../../utils/function'



/**
* 
* @param {Number} number_of_jobs  
* @param {Number} number_of_pages 
*/

const scrap_refs = (is_by_number_of_pages, number_of_pages, number_of_jobs, setLoading, setMessage, setMsg_save_data) => {

    setMsg_save_data({
        loading: false,
        status: null,
        data: " Enregistrer dans la Base de donnees"
    })


    console.log({ number_of_jobs })

    setMessage({
        status: null,
        data: null
    })
    setLoading(true)


    axios.get(right_url(`/scrap/${is_by_number_of_pages ? 'multiplePages' : 'multipleJobs'}?number=${is_by_number_of_pages ? number_of_pages : number_of_jobs}`))
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



const save_N_jobs = (data, setMsg_save_data) => {
    setMsg_save_data({
        loading: true,
        status: null,
        data: ''
    })

    let a = 0;
    for (let index = 0; index < data.length; index++) {
        axios.get(right_url("/scrap/oneJob?url=https://emploi.ma" + data[index]))
            .then(res => {

                axios.post(right_url("/emploi/jobs"), res.data)
                    .then(response => {
                        console.log({ response })
                        a++;
                        console.log({ a })
                        if (a === (data.length)) {
                            console.log("terminie")
                            setMsg_save_data({
                                loading: false,
                                status: true,
                                data: 'saved!'
                            })

                        }

                    })

                    .catch(error => console.error({ error }))


            })
            .catch(er => {

                console.error({ er })
            }
            )




    }



}


const Multiple = () => {

    const [number_of_pages, setNumber_of_pages] = useState(1)
    const [scrap_type, setScrap_type] = useState(2)
    const [number_of_jobs, setNumber_of_jobs] = useState(1)
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState({
        status: null,
        data: null
    })

    const [msg_save_data, setMsg_save_data] = useState({
        loading: false,
        status: null,
        data: " Enregistrer dans la Base de donnees"
    })

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

                <div className="flex flex-col   w-full py-10  md:p-10 text-center p-2">


                    <h1 className="text-lg md:text-2xl font-medium text-gray-800 md:p-6   mb-5  "> Scrapper  plusieurs pages, plusieurs annonces</h1>

                    <div className="flex space-x-6 items-center ">
                        <input type="radio" checked={scrap_type == 2} onClick={() => setScrap_type(2)}></input>

                        <h2 className="text-gray-500 ">Scrapper " N " dernieres annonces</h2>
                    </div>

                    <div className="flex space-x-6 items-center  mb-8  pt-2">
                        <input type="radio" checked={scrap_type == 1} onClick={() => setScrap_type(1)}></input>
                        <h2 className="text-gray-500 ">Scrapper par nombre de pages</h2>


                    </div>


                    {
                        scrap_type == 1 ?
                            <div className="flex  flex-wrap md:space-y-0    space-y-4 space-x-4 items-center text-gray-800">
                                <label className='text-gray-600 font-medium'>Combien de page vous voulez Scrapper?</label>
                                <input className=" p-3 border rounded-lg w-60"
                                    placeholder="1 page = 25 annonces"
                                    type="number" min="1" onChange={(e) => setNumber_of_pages(e.target.value)} ></input>

                                <button
                                    type="submit"
                                    onClick={() => scrap_refs(true, number_of_pages, 0, setLoading, setMessage, setMsg_save_data)}

                                    className="bg-gray-800   hover:opacity-60 font-medium text-sm md:text-base   rounded-lg p-3 px-5 text-gray-200 ">
                                    Scrap!
                                </button>
                            </div>

                            :

                            <div className="flex flex-wrap md:space-y-0 space-y-4 space-x-4 items-center text-gray-800">
                                <label className='text-gray-600 font-medium' >Combien d'annonces vous voulez Scrapper?</label>
                                <input className=" p-3 border rounded-lg w-60"
                                    placeholder=" nombre d'annonces"
                                    type="number" min="1" onChange={(e) => setNumber_of_jobs(e.target.value)} ></input>

                                <button
                                    type="submit"
                                    onClick={() => scrap_refs(false, number_of_pages, number_of_jobs, setLoading, setMessage, setMsg_save_data)}


                                    className="bg-gray-800   hover:opacity-60 font-medium text-sm md:text-base   rounded-lg p-3 px-5 text-gray-200 ">
                                    Scrap!
                                </button>
                            </div>

                    }



                    {
                        loading &&
                        <div className="flex space-x-4 p-6  justify-center">
                            <svg className="h-8 w-8 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            <p>
                                Scrapping en cours
                            </p>
                        </div>
                    }

                    <div >
                        {
                            message.status &&

                            <div className="flex flex-col items-center  p-6 space-y-3">


                                {
                                    message.data.map(item => (
                                        <div className="flex justify-between text-sm text-gray-700 border md:w-80 bg-gray-100 rounded-md p-2  ">

                                            <p> annonce ref #{item.split("/")[2].split("-")[item.split("/")[2].split("-").length - 1]}</p>

                                            <Link href={`/scrap/single?url=https://emploi.ma${item}`}>
                                                <a className="text-blue-600 hover:opacity-60 underline"> extraire puis save Data</a>
                                            </Link>


                                        </div>
                                    ))
                                }

                                <div className="buttonSave py-10">
                                    <button

                                        disabled={msg_save_data.status}
                                        onClick={() => save_N_jobs(message.data, setMsg_save_data)}

                                        className={`${msg_save_data.status == null && 'bg-blue-600'}   ${msg_save_data.status == true && 'bg-green-600'}  ${msg_save_data.status == false && 'bg-red-600'}  hover:opacity-60 font-medium text-sm md:text-base  rounded-lg p-2   text-gray-100 `}>
                                        {
                                            msg_save_data.loading ?
                                                'saving...'
                                                :
                                                msg_save_data.data
                                        }



                                    </button>

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

export default Multiple
