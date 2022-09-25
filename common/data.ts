export const generateList = () => {
    return [...Array(1000)].map(x => ({
        id: Math.random().toString(16).slice(2)
    }))
}