export default {
    /**
     * @description 设置localStorage
     * @param key {string}
     * @param value {unknown}
     */
    set(key: string, value: unknown) {
        localStorage.setItem(key, JSON.stringify(value))
    },
    /**
     * @description 获取localStorage
     * @param key {string}
     */
    get(key: string) {
        const value = localStorage.getItem(key)
        if (!value) return ''
        try {
            return JSON.parse(value)
        } catch (error) {
            return value
        }
    },
    /**
     * @description 删除localStorage
     * @param key {string}
     */
    remove(key: string) {
        localStorage.removeItem(key)
    },
    /**
     * @description 清空localStorage
     */
    clear() {
        localStorage.clear()
    }
}
