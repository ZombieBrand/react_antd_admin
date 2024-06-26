export function successWrap({ message = '操作成功', code = 0, data = '' }: { message?: string; code?: number; data?: any }) {
  return {
    code,
    message,
    data
  }
}

export function errorWrap({ message, code = -1, data = '' }: { message?: string; code?: number; data?: any }) {
  return {
    code,
    message,
    data
  }
}
