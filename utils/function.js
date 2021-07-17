
/**
 * @param ext /pages
 */

import axios from "axios"

export const right_url = (ext) => {

    const url = {
        local: "http://localhost:5000",
        remote: "https://human-tech.herokuapp.com"
    }

    return url.local + ext
}




/**
 * 
 * @param {Object} job  
 * @param {Function} setMsg_save_data 
 */
export const save_job = (job, setMsg_save_data) => {

    setMsg_save_data({
        loading: true,
        status: null,
        data: ''
    })

    axios.post(right_url("/emploi/jobs"), job)
        .then(res => {

            if (res.data.success)
                setMsg_save_data({
                    loading: false,
                    status: true,
                    data: " Data enregistree avec success! "
                })

            console.log({ data: res.data })
        })
        .catch(er => {
            setMsg_save_data({
                loading: false,
                status: false,
                data: "error"
            })

            console.error({ er })
        }
        )



}