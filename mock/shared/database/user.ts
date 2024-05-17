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
    account: 'admin',
    password: '',
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
    account: 'admin',
    password: '',
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

/**{
  "list|15-20": [
    {
      "id": "@id",
      "userName": "@cname",
      account:'admin',
      password:'',
      "userEmail": "@email",
      "state": "@natural(1, 2)",
      "role": "@natural(1, 2)",
      "roleList": "@guid",
      "departmentId": "@id",
      "departmentName": "@cname",
      "createId": "@natural",
      "created_at": "@datetime",
      "updated_at": "@datetime"
    }
  ]
}
 */
export const userList = [
  {
    id: '230000200003186365',
    userName: '高强',
    account: 'admin',
    password: '',
    userEmail: 's.kymr@lqnelgosv.va',
    state: 2,
    role: 2,
    roleList: 'b5F54611-Cb7f-64f7-3eD3-F4d2FA1d2B76',
    departmentId: '230000200003186365',
    departmentName: '唐娜',
    createId: 3152765904143280,
    created_at: '1975-05-08 14:25:12',
    updated_at: '2002-06-13 00:01:38'
  },
  {
    id: '650000199010182832',
    userName: '郑涛',
    account: 'admin',
    password: '',
    userEmail: 'u.thkn@xrprdlrc.az',
    state: 2,
    role: 2,
    roleList: 'BeAFcfCe-6Afe-EDAB-DdF6-5B6cF915bAC7',
    departmentId: '650000199010182832',
    departmentName: '董涛',
    createId: 1410064466196062,
    created_at: '1989-02-28 00:00:11',
    updated_at: '2001-07-09 03:10:30'
  },
  {
    id: '500000200608225158',
    userName: '唐丽',
    account: 'admin',
    password: '',
    userEmail: 'g.wzrenhxa@otyy.bw',
    state: 1,
    role: 1,
    roleList: '8dd84AAF-3BF9-25D9-cA7d-43cbbfBD2A45',
    departmentId: '500000200608225158',
    departmentName: '朱敏',
    createId: 1827587218759888,
    created_at: '1995-01-11 22:25:47',
    updated_at: '2002-04-05 07:50:11'
  },
  {
    id: '420000197911101065',
    userName: '尹秀英',
    account: 'admin',
    password: '',
    userEmail: 'i.brggbwxtb@xhnx.gw',
    state: 1,
    role: 2,
    roleList: 'b4AB1Ffa-B16E-9cA9-1e59-fEdDE7D9fe2C',
    departmentId: '420000197911101065',
    departmentName: '江丽',
    createId: 735884228644158,
    created_at: '1995-03-19 03:55:41',
    updated_at: '1993-02-25 23:37:34'
  },
  {
    id: '140000199812284152',
    userName: '傅秀兰',
    account: 'admin',
    password: '',
    userEmail: 'e.tplfnit@syrkk.sn',
    state: 2,
    role: 2,
    roleList: '2D0336Ec-92E6-8A8a-E378-E18DDD2be1EE',
    departmentId: '140000199812284152',
    departmentName: '范霞',
    createId: 3133597520723320,
    created_at: '1996-10-31 20:26:10',
    updated_at: '1983-04-30 08:00:07'
  },
  {
    id: '430000199109073301',
    userName: '戴磊',
    account: 'admin',
    password: '',
    userEmail: 'w.hjfj@qpkrnbfl.gl',
    state: 2,
    role: 1,
    roleList: 'B74CEF38-53ca-69c2-d60B-BeFdB43b6d78',
    departmentId: '430000199109073301',
    departmentName: '陆勇',
    createId: 7255167213452372,
    created_at: '1993-08-23 06:55:55',
    updated_at: '1994-03-18 19:47:39'
  },
  {
    id: '44000020111209923X',
    userName: '唐超',
    account: 'admin',
    password: '',
    userEmail: 'w.uzos@rounat.li',
    state: 2,
    role: 1,
    roleList: 'A4311A77-e1F9-4A8C-7f50-FcbcCeAF7bBD',
    departmentId: '44000020111209923X',
    departmentName: '曾平',
    createId: 1095944302614666,
    created_at: '1984-10-27 01:06:45',
    updated_at: '2018-10-07 04:39:33'
  },
  {
    id: '130000197609023757',
    userName: '叶敏',
    account: 'admin',
    password: '',
    userEmail: 'b.ockvrzt@xyc.tv',
    state: 2,
    role: 2,
    roleList: '3d66E75d-EAE9-DCE1-a857-aF27FCE3fEC1',
    departmentId: '130000197609023757',
    departmentName: '熊秀兰',
    createId: 2123673704012578,
    created_at: '2024-05-08 03:21:08',
    updated_at: '1970-01-11 04:20:05'
  },
  {
    id: '410000199811172680',
    userName: '高刚',
    account: 'admin',
    password: '',
    userEmail: 'd.oohgxlozx@iqxjfutk.so',
    state: 2,
    role: 1,
    roleList: 'Ffb56DED-9A62-FEb0-bDFB-Dc45bB77eE3B',
    departmentId: '410000199811172680',
    departmentName: '赵桂英',
    createId: 8165227851945078,
    created_at: '2014-11-29 22:09:09',
    updated_at: '1983-07-11 13:47:08'
  },
  {
    id: '440000199911029174',
    userName: '丁洋',
    account: 'admin',
    password: '',
    userEmail: 'w.bexu@dxzxtqv.it',
    state: 2,
    role: 2,
    roleList: '7eD7026F-FcfE-cFff-2BBc-4BB8bd2d2a8B',
    departmentId: '440000199911029174',
    departmentName: '常娜',
    createId: 903451729175936,
    created_at: '2023-09-08 20:48:54',
    updated_at: '2021-11-08 21:40:18'
  },
  {
    id: '130000201009170592',
    userName: '汤静',
    account: 'admin',
    password: '',
    userEmail: 'w.eennc@btkosqivf.no',
    state: 1,
    role: 1,
    roleList: '67ceDF74-bBcc-BebE-B81F-aeCA9c12aEC0',
    departmentId: '130000201009170592',
    departmentName: '高丽',
    createId: 5676850236109344,
    created_at: '1986-03-14 02:27:59',
    updated_at: '2011-10-09 18:55:46'
  },
  {
    id: '440000201003071684',
    userName: '田霞',
    account: 'admin',
    password: '',
    userEmail: 'i.trryrdkv@hsrxwkx.mh',
    state: 1,
    role: 2,
    roleList: '91E74dbe-06bD-aEea-a9B4-B42FBC4578BC',
    departmentId: '440000201003071684',
    departmentName: '余静',
    createId: 6857310930002772,
    created_at: '1994-04-06 20:34:11',
    updated_at: '2021-03-20 10:47:32'
  },
  {
    id: '82000020060522754X',
    userName: '吴超',
    account: 'admin',
    password: '',
    userEmail: 'q.okcnpy@ikgoo.sg',
    state: 1,
    role: 2,
    roleList: '121A5A80-e9DF-e95b-EFfF-DA4CD9796AfB',
    departmentId: '82000020060522754X',
    departmentName: '金刚',
    createId: 464272372906122,
    created_at: '1994-01-26 13:45:21',
    updated_at: '2009-03-24 16:56:55'
  },
  {
    id: '540000201101070590',
    userName: '史芳',
    account: 'admin',
    password: '',
    userEmail: 'x.qmyahtqh@pojx.tp',
    state: 1,
    role: 2,
    roleList: '60bEF6Dd-a8AB-a22b-e8D9-743E5be7cEd6',
    departmentId: '540000201101070590',
    departmentName: '常静',
    createId: 1019938556793944,
    created_at: '2016-10-27 16:11:02',
    updated_at: '2010-04-15 02:14:07'
  },
  {
    id: '130000199407160234',
    userName: '宋桂英',
    account: 'admin',
    password: '',
    userEmail: 'u.udvzkkf@wyqbpbvhte.gh',
    state: 2,
    role: 2,
    roleList: '8f2bF6f3-4592-1C1B-cA5A-EE8DAdAA1c22',
    departmentId: '130000199407160234',
    departmentName: '蒋超',
    createId: 3163022210494404,
    created_at: '2021-02-09 22:18:33',
    updated_at: '2023-10-23 16:42:04'
  }
]
