const API_URL = 'http://localhost:8080'

export async function cadastrarMembro(membro) {

    const resposta = await fetch(`${API_URL}/membros`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(membro)
    })

    return resposta
}

export default API_URL