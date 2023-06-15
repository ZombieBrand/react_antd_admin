import { defineMock } from '@alova/mock'
const mockApi = import.meta.env.VITE_USE_MOCK

export default defineMock(
    {
        // 捕获get请求
        [`${mockApi}/todo`]: () => {
            return {
                data: [
                    {
                        id: 10,
                        text: 'a'
                    },
                    {
                        id: 20,
                        text: 'b'
                    },
                    {
                        id: 30,
                        text: 'c'
                    }
                ],
                code: 200
            }
        }
    },
    true
) // 第二个参数表示是否启用本组mock接口，默认为true，可以指定为false关闭
