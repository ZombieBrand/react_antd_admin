export const getTokenAUTH = () => `Token::${localStorage.getItem('token') ?? ''}`
