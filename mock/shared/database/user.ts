export const userLoginData = {
  operator: {
    token: 'e1b3ec89ead7f83a9245ed5c9cacfdbf'
  },
  admin: {
    token: 'e3afed0047b08059d0fada10f400c1e5'
  }
}

const userMap = {
  operator: {
    id: '1',
    userName: 'Operator',
    avatar: '',
    userEmail: '',
    state: 1,
    role: 1,
    roleList: 'e1b3ec89ead7f83a9245e',
    departmentId: 'e1b3ec89ead7f83a9245e',
    departmentName: '测试',
    createId: 0
  },
  admin: {
    id: '2',
    userName: 'Admin',
    avatar: '',
    userEmail: '',
    state: 1,
    role: 2,
    roleList: 'e1b3ec89ead7f83a9245e',
    departmentId: 'e1b3ec89ead7f83a9245e',
    departmentName: '测试',
    createId: 1
  }
}

export const userInfoData = (token: string) => {
  for (const [key, value] of Object.entries(userLoginData)) {
    if (value.token === token) {
      return Reflect.get(userMap, key)
    } else {
      continue
    }
  }
}
