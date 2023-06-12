/**
 * 接口类型定义
 */
// * 分页请求参数
export interface PageParams {
    pageNum: number | undefined
    pageSize?: number | undefined
}
// 返回结果
export interface Result<T = unknown> {
    code: number
    data: T
    msg: string
}
// 通用分页列表
export interface ResultData<T> {
    list: T[]
    page: {
        pageNum: number
        pageSize: number
        total: number | 0
    }
}
