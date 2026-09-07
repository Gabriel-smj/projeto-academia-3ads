const API_URL = 'http://localhost:8080'

export async function listarMembros() {

    const resposta = await fetch(`${API_URL}/membros`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (!resposta.ok) {
        throw new Error('Erro ao buscar membros')
    }

    const dados = await resposta.json()

    return dados
}

export async function cadastrarMembro(membro) {

    const resposta = await fetch(`${API_URL}/membros`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(membro)
    })

    if (!resposta.ok) {
        throw new Error('Erro ao cadastrar membro')
    }

    const dados = await resposta.json()

    return dados
}

export default API_URL