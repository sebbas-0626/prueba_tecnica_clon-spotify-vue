const enviroment = import.meta.env

const obtenerToken = async () => {
    try {
        const headers = {

            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${btoa(enviroment.VITE_CLIENT_ID + ':' + enviroment.VITE_CLIENT_SECRET)}`
        }
        const body = {
            grant_type: 'client_credentials'
        }
        const response = await fetch(`${enviroment.VITE_TOKEN_URL}/token`, {
            method: 'POST',
            headers: headers,
            body:'grant_type=client_credentials'

        })
        const data = await response.json()
        console.log('data token' , data)
        localStorage.setItem('token',data.access_token)
        return data.access_token;
    } catch (error) {

    }

}


const nuevosLanzamientos = async (limit:number=12, offset:number=0) => {

    const url = `${enviroment.VITE_API_URL}/browse/new-releases?limit=${limit}&offset=${offset}`;
const token = await obtenerToken()
console.log(token)

    try {
        const respuesta = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token') ?? token}`
            }
        });

        if (!respuesta.ok) {
            throw new Error('Error al obtener los datos');
        }

        const datos = await respuesta.json();
        return datos.albums.items.map((item: any) => {
            return {
                imagen: item.images[0].url,
                artista: item.artists[0].name,
                nombreCancion: item.name
            };
        });
    } catch (error) {
        console.error('Error al obtener nuevos lanzamientos:', error);
        throw error;
    }
}

export default {
    obtenerToken,
    nuevosLanzamientos,

}