import storage from './storage'
export const getTokenAUTH = () => `Token::${storage.get('token') ?? ''}`
export const getToken = () => storage.get('token') ?? ''
