export const menuList = [
  {
    id: '655db45ff10762608048caec',
    menuType: 1,
    menuName: '首页',
    path: 'home',
    icon: 'HomeOutlined',
    orderBy: 0,
    menuState: 1,
    parentId: '',
    createTime: '2023-11-22T07:50:59.931Z',
    updateTime: '2023-11-22T08:27:07.828Z',
    children: [
      {
        id: '655db4a4f10762608048caf4',
        menuType: 2,
        menuName: '查看',
        menuCode: 'home@query',
        orderBy: 0,
        menuState: 1,
        parentId: '655db45ff10762608048caec',
        createTime: '2023-11-22T07:50:59.931Z',
        updateTime: '2023-11-22T07:50:59.931Z'
      }
    ],
    buttons: [
      {
        id: '655db4a4f10762608048caf4',
        menuType: 2,
        menuName: '查看',
        menuCode: 'home@query',
        orderBy: 0,
        menuState: 1,
        parentId: '655db45ff10762608048caec',
        createTime: '2023-11-22T07:50:59.931Z',
        updateTime: '2023-11-22T07:50:59.931Z'
      }
    ]
  },
  {
    id: '655db520f10762608048cafa',
    menuType: 1,
    menuName: '系统管理',
    path: 'system',
    icon: 'UsergroupAddOutlined',
    orderBy: 1,
    menuState: 1,
    parentId: '',
    createTime: '2023-11-22T07:50:59.931Z',
    updateTime: '2023-11-22T07:50:59.931Z',
    children: [
      {
        id: '655db546f10762608048cafe',
        menuType: 1,
        menuName: '用户管理',
        path: 'user',
        icon: 'UserOutlined',
        orderBy: 0,
        menuState: 1,
        parentId: '655db520f10762608048cafa',
        createTime: '2023-11-22T07:50:59.931Z',
        updateTime: '2023-11-22T08:27:42.307Z',
        children: [
          {
            id: '655db556f10762608048cb02',
            menuType: 2,
            menuName: '查看',
            menuCode: 'user@query',
            orderBy: 0,
            menuState: 1,
            parentId: '655db546f10762608048cafe',
            createTime: '2023-11-22T07:50:59.931Z',
            updateTime: '2023-11-22T07:50:59.931Z'
          },
          {
            id: '655dc53ed4dc6d6fda15dbad',
            menuType: 2,
            menuName: '新增',
            menuCode: 'user@create',
            orderBy: 1,
            menuState: 1,
            parentId: '655db546f10762608048cafe',
            createTime: '2023-11-22T08:52:47.967Z',
            updateTime: '2023-11-22T08:52:47.967Z'
          },
          {
            id: '655dc67ed4dc6d6fda15dbc7',
            menuType: 2,
            menuName: '编辑',
            menuCode: 'user@edit',
            orderBy: 2,
            menuState: 1,
            parentId: '655db546f10762608048cafe',
            createTime: '2023-11-22T08:52:47.967Z',
            updateTime: '2023-11-22T08:52:47.967Z'
          },
          {
            id: '655dc68ad4dc6d6fda15dbcb',
            menuType: 2,
            menuName: '删除',
            menuCode: 'user@delete',
            orderBy: 3,
            menuState: 1,
            parentId: '655db546f10762608048cafe',
            createTime: '2023-11-22T08:52:47.967Z',
            updateTime: '2023-11-22T08:52:47.967Z'
          }
        ],
        buttons: [
          {
            id: '655db556f10762608048cb02',
            menuType: 2,
            menuName: '查看',
            menuCode: 'user@query',
            orderBy: 0,
            menuState: 1,
            parentId: '655db546f10762608048cafe',
            createTime: '2023-11-22T07:50:59.931Z',
            updateTime: '2023-11-22T07:50:59.931Z'
          },
          {
            id: '655dc53ed4dc6d6fda15dbad',
            menuType: 2,
            menuName: '新增',
            menuCode: 'user@create',
            orderBy: 1,
            menuState: 1,
            parentId: '655db546f10762608048cafe',
            createTime: '2023-11-22T08:52:47.967Z',
            updateTime: '2023-11-22T08:52:47.967Z'
          },
          {
            id: '655dc67ed4dc6d6fda15dbc7',
            menuType: 2,
            menuName: '编辑',
            menuCode: 'user@edit',
            orderBy: 2,
            menuState: 1,
            parentId: '655db546f10762608048cafe',
            createTime: '2023-11-22T08:52:47.967Z',
            updateTime: '2023-11-22T08:52:47.967Z'
          },
          {
            id: '655dc68ad4dc6d6fda15dbcb',
            menuType: 2,
            menuName: '删除',
            menuCode: 'user@delete',
            orderBy: 3,
            menuState: 1,
            parentId: '655db546f10762608048cafe',
            createTime: '2023-11-22T08:52:47.967Z',
            updateTime: '2023-11-22T08:52:47.967Z'
          }
        ]
      },
      {
        id: '655db59bf10762608048cb06',
        menuType: 1,
        menuName: '菜单管理',
        path: 'menu',
        icon: 'MenuOutlined',
        orderBy: 1,
        menuState: 1,
        parentId: '655db520f10762608048cafa',
        createTime: '2023-11-22T07:50:59.931Z',
        updateTime: '2023-11-22T07:50:59.931Z',
        children: [
          {
            id: '655db5a8f10762608048cb0a',
            menuType: 2,
            menuName: '查看',
            menuCode: 'menu@query',
            orderBy: 0,
            menuState: 1,
            parentId: '655db59bf10762608048cb06',
            createTime: '2023-11-22T07:50:59.931Z',
            updateTime: '2023-11-22T07:50:59.931Z'
          },
          {
            id: '655dc69bd4dc6d6fda15dbcf',
            menuType: 2,
            menuName: '新增',
            menuCode: 'menu@create',
            orderBy: 1,
            menuState: 1,
            parentId: '655db59bf10762608048cb06',
            createTime: '2023-11-22T08:52:47.967Z',
            updateTime: '2023-11-22T08:52:47.967Z'
          },
          {
            id: '655dc6a5d4dc6d6fda15dbd3',
            menuType: 2,
            menuName: '编辑',
            menuCode: 'menu@edit',
            orderBy: 2,
            menuState: 1,
            parentId: '655db59bf10762608048cb06',
            createTime: '2023-11-22T08:52:47.967Z',
            updateTime: '2023-11-22T08:52:47.967Z'
          },
          {
            id: '655dc6afd4dc6d6fda15dbd7',
            menuType: 2,
            menuName: '删除',
            menuCode: 'menu@delete',
            orderBy: 3,
            menuState: 1,
            parentId: '655db59bf10762608048cb06',
            createTime: '2023-11-22T08:52:47.967Z',
            updateTime: '2023-11-22T08:52:47.967Z'
          }
        ],
        buttons: [
          {
            id: '655db5a8f10762608048cb0a',
            menuType: 2,
            menuName: '查看',
            menuCode: 'menu@query',
            orderBy: 0,
            menuState: 1,
            parentId: '655db59bf10762608048cb06',
            createTime: '2023-11-22T07:50:59.931Z',
            updateTime: '2023-11-22T07:50:59.931Z'
          },
          {
            id: '655dc69bd4dc6d6fda15dbcf',
            menuType: 2,
            menuName: '新增',
            menuCode: 'menu@create',
            orderBy: 1,
            menuState: 1,
            parentId: '655db59bf10762608048cb06',
            createTime: '2023-11-22T08:52:47.967Z',
            updateTime: '2023-11-22T08:52:47.967Z'
          },
          {
            id: '655dc6a5d4dc6d6fda15dbd3',
            menuType: 2,
            menuName: '编辑',
            menuCode: 'menu@edit',
            orderBy: 2,
            menuState: 1,
            parentId: '655db59bf10762608048cb06',
            createTime: '2023-11-22T08:52:47.967Z',
            updateTime: '2023-11-22T08:52:47.967Z'
          },
          {
            id: '655dc6afd4dc6d6fda15dbd7',
            menuType: 2,
            menuName: '删除',
            menuCode: 'menu@delete',
            orderBy: 3,
            menuState: 1,
            parentId: '655db59bf10762608048cb06',
            createTime: '2023-11-22T08:52:47.967Z',
            updateTime: '2023-11-22T08:52:47.967Z'
          }
        ]
      },
      {
        id: '655db5c7f10762608048cb0e',
        menuType: 1,
        menuName: '角色管理',
        path: 'role',
        icon: 'TrademarkCircleOutlined',
        orderBy: 2,
        menuState: 1,
        parentId: '655db520f10762608048cafa',
        createTime: '2023-11-22T07:50:59.931Z',
        updateTime: '2023-11-22T07:50:59.931Z',
        children: [
          {
            id: '655dbb0011c02c8597dce710',
            menuType: 2,
            menuName: '查看',
            icon: 'role@query',
            orderBy: 0,
            menuState: 1,
            parentId: '655db5c7f10762608048cb0e',
            createTime: '2023-11-22T08:23:39.918Z',
            updateTime: '2023-11-22T08:40:20.527Z',
            menuCode: 'role@query'
          },
          {
            id: '655dc6c7d4dc6d6fda15dbdb',
            menuType: 2,
            menuName: '编辑',
            menuCode: 'role@edit',
            orderBy: 1,
            menuState: 1,
            parentId: '655db5c7f10762608048cb0e',
            createTime: '2023-11-22T08:52:47.967Z',
            updateTime: '2023-11-22T08:52:47.967Z'
          },
          {
            id: '655dc6d3d4dc6d6fda15dbdf',
            menuType: 2,
            menuName: '设置权限',
            menuCode: 'role@create',
            orderBy: 2,
            menuState: 1,
            parentId: '655db5c7f10762608048cb0e',
            createTime: '2023-11-22T08:52:47.967Z',
            updateTime: '2023-11-22T08:52:47.967Z'
          },
          {
            id: '655dc6ddd4dc6d6fda15dbe3',
            menuType: 2,
            menuName: '删除',
            menuCode: 'role@delete',
            orderBy: 3,
            menuState: 1,
            parentId: '655db5c7f10762608048cb0e',
            createTime: '2023-11-22T08:52:47.967Z',
            updateTime: '2023-11-22T08:52:47.967Z'
          }
        ],
        buttons: [
          {
            id: '655dbb0011c02c8597dce710',
            menuType: 2,
            menuName: '查看',
            icon: 'role@query',
            orderBy: 0,
            menuState: 1,
            parentId: '655db5c7f10762608048cb0e',
            createTime: '2023-11-22T08:23:39.918Z',
            updateTime: '2023-11-22T08:40:20.527Z',
            menuCode: 'role@query'
          },
          {
            id: '655dc6c7d4dc6d6fda15dbdb',
            menuType: 2,
            menuName: '编辑',
            menuCode: 'role@edit',
            orderBy: 1,
            menuState: 1,
            parentId: '655db5c7f10762608048cb0e',
            createTime: '2023-11-22T08:52:47.967Z',
            updateTime: '2023-11-22T08:52:47.967Z'
          },
          {
            id: '655dc6d3d4dc6d6fda15dbdf',
            menuType: 2,
            menuName: '设置权限',
            menuCode: 'role@create',
            orderBy: 2,
            menuState: 1,
            parentId: '655db5c7f10762608048cb0e',
            createTime: '2023-11-22T08:52:47.967Z',
            updateTime: '2023-11-22T08:52:47.967Z'
          },
          {
            id: '655dc6ddd4dc6d6fda15dbe3',
            menuType: 2,
            menuName: '删除',
            menuCode: 'role@delete',
            orderBy: 3,
            menuState: 1,
            parentId: '655db5c7f10762608048cb0e',
            createTime: '2023-11-22T08:52:47.967Z',
            updateTime: '2023-11-22T08:52:47.967Z'
          }
        ]
      }
    ]
  }
]
export const buttonList = [
  'driverList@query',
  'cluster@query',
  'role@query',
  'role@edit',
  'role@create',
  'role@delete',
  'menu@query',
  'menu@create',
  'menu@edit',
  'menu@delete',
  'user@query',
  'user@create',
  'user@edit',
  'user@delete',
  'home@query'
]
