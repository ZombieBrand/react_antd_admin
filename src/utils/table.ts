import { ITableResult } from '@/types/table'

export function transformTableData<T>(promiseResult: ITableResult<T>) {
  return {
    data: promiseResult.list,
    success: true,
    total: promiseResult.total
  }
}
