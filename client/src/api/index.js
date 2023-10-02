export const getSalads = async () => {
    const url = 'http://localhost:5000/api/salads/';
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const addSaladImages = async (images, saladId) => {
    const url = `http://localhost:5000/api/salads/${saladId}`;

    const requestOptions = {
        method: 'PATCH',
        body: images
    }

    try {
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}