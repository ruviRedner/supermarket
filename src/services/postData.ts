export const postData = async (url: string, data: any, token: string|null = null) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token?token:""
            },
            body: JSON.stringify(data)
        })
        return response.json()
    } catch (error) {
        return error
    }
}