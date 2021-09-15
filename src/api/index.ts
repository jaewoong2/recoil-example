export const getData = async (id: number) => {
    const data = await fetch(`https://my-json-server.typicode.com/jaewoong2/Fake_api/${id}`, { method: 'GET' });

    return data.json();
}