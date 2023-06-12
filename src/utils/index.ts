/**
 * 该函数接受一个数字或字符串，并将其格式化为货币。
 */
const toCurrency = (n: number | bigint, curr: string, LanguageFormat: string) =>
    Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr }).format(n)

/**
 * 该函数接受一个数字或字符串，并将其格式化为人民币。
 */
export const formatNum = (num: number | string) => {
    if (typeof num === 'string') {
        num = parseFloat(num)
    }
    return toCurrency(num, 'CNY', 'zh-CN')
}

export function dateFormatter(formatter: string, t?: string | number | Date): string {
    const date = t ? new Date(t) : new Date(),
        Y = date.getFullYear() + '',
        M = date.getMonth() + 1,
        D = date.getDate(),
        H = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds()
    return formatter
        .replace(/YYYY|yyyy/g, Y)
        .replace(/YY|yy/g, Y.substr(2, 2))
        .replace(/MM/g, (M < 10 ? '0' : '') + M)
        .replace(/DD/g, (D < 10 ? '0' : '') + D)
        .replace(/HH|hh/g, (H < 10 ? '0' : '') + H)
        .replace(/mm/g, (m < 10 ? '0' : '') + m)
        .replace(/ss/g, (s < 10 ? '0' : '') + s)
}
