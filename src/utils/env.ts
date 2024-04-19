export const getEnv = (): string => {
  return import.meta.env.MODE
}

export const isDevMode = (): boolean => {
  return import.meta.env.MODE === 'development'
}

export const isProdMode = (): boolean => {
  return import.meta.env.MODE === 'production'
}
