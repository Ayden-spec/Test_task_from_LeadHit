import axios from 'axios';

export const signIn = async (site_id, callback) => {
    try {
        const response = await axios.get('https://track-api.leadhit.io/client/test_auth',
            {
                headers: {
                    'Api-Key': '5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo',
                    'Leadhit-Site-Id': site_id
                }
            }
        )
        console.log(response)
        localStorage.setItem('leadhit-site-id', site_id)
        callback()
    } catch (e) {
        console.log(e)
    }
}