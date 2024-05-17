export type ITableResult<T> = { total: number; list: T[] }
export type ITableParam = {
  current: number
  pageSize: number
  filter?: any
  sorter?: any
  extra?: any
  query: {
    [key: string]: any
  }
}
