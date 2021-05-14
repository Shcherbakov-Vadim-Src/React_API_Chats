export const getData = async () => {
    return fetch(`https://60895abe8c8043001757e9c6.mockapi.io/chats`)
    .then ((res) => {
        return res.json();
})
}

export const getDataSub = async (chatId) => {
return fetch(`https://60895abe8c8043001757e9c6.mockapi.io/chats/${chatId}/messages`)
.then ((res) => {
    return res.json();  
})
}