
/**
 * @param ext /pages
 */

export const right_url = (ext) => {

    const url = {
        local: "http://localhost:5000",
        remtoe: "https://human-tech.herokuapp.com/"
    }

    return url.remtoe + ext
}