import type { ActionType, ProColumns } from '@ant-design/pro-components'
import { ProTable } from '@ant-design/pro-components'
import { App, Button } from 'antd'
import { useRef, useState } from 'react'
import EditMenu from './EditMenu'
import { IAction } from '@/constant/editType'
import { getMenuListApi } from '@/api/system/menu'
import { useRequest } from 'ahooks'
import { transformTableData } from '@/utils/table'
import type { IMenuItem } from '@/types/api/menu'
import { useTableScrollY } from '@/hook/useTable'
import toast from 'react-hot-toast'
import { paginationOptions } from '@/config/table'

const MenuManage = () => {
  const { modal } = App.useApp()
  const actionRef = useRef<ActionType>()
  const [data, setData] = useState<IMenuItem[]>(() => [])
  const { runAsync } = useRequest(getMenuListApi)
  const menuRef = useRef<{
    open: (type: IAction, data?: IMenuItem | { parentId?: string; orderBy?: number }) => void
  }>()

  // 创建
  const handleCreate = () => {
    menuRef.current?.open(IAction.CREATE, {
      orderBy: data.length
    })
  }
  // 新增子菜单
  const handleSubCreate = (record: IMenuItem) => {
    menuRef.current?.open(IAction.CREATE, { parentId: record.id, orderBy: record.children?.length })
  }
  // 编辑
  const handleEdit = (record: IMenuItem) => {
    menuRef.current?.open(IAction.UPDATE, record)
  }
  // 公共删除用户接口
  const handleUserDelSubmit = async (ids: string[]) => {
    console.log(ids)
  }
  // 删除用户
  const handleDel = (record: IMenuItem) => {
    let text = ''
    if (record.menuType == 1) text = '菜单'
    if (record.menuType == 2) text = '按钮'
    if (record.menuType == 3) text = '页面'
    modal.confirm({
      title: '确认',
      content: `确认删除该${text}吗？`,
      onOk: () => {
        handleUserDelSubmit([record.id])
      }
    })
  }
  const columns: ProColumns<IMenuItem>[] = [
    {
      title: '菜单名称',
      dataIndex: 'menuName'
    },
    {
      title: '菜单图标',
      dataIndex: 'icon',
      search: false
    },
    {
      title: '菜单类型',
      dataIndex: 'menuType',
      search: false,
      valueType: 'select',
      fieldProps: {
        options: [
          {
            label: '菜单',
            value: 1
          },
          {
            label: '按钮',
            value: 2
          },
          {
            label: '页面',
            value: 3
          }
        ]
      }
    },
    {
      title: '权限标识',
      dataIndex: 'menuCode',
      search: false
    },
    {
      title: '路由地址',
      dataIndex: 'path',
      search: false
    },
    {
      title: '组件路径',
      dataIndex: 'component',
      search: false
    },
    {
      title: '菜单状态',
      dataIndex: 'menuState',
      valueType: 'select',
      fieldProps: {
        options: [
          {
            label: '正常',
            value: 1
          },
          {
            label: '停用',
            value: 2
          }
        ]
      }
    },
    {
      title: '更新时间',
      dataIndex: 'updated_at',
      search: false,
      valueType: 'date'
    },
    {
      title: '操作',
      valueType: 'option',
      key: 'option',
      width: 230,
      render: (_, record) => {
        return [
          <Button type='primary' key='create' onClick={() => handleSubCreate(record)}>
            新增
          </Button>,
          <Button type='primary' key='edit' onClick={() => handleEdit(record)}>
            编辑
          </Button>,
          <Button type='primary' danger key='delete' onClick={() => handleDel(record)}>
            删除
          </Button>
        ]
      }
    }
  ]
  return (
    <>
      <ProTable<IMenuItem>
        columns={columns}
        actionRef={actionRef}
        cardBordered={true}
        scroll={{ y: useTableScrollY() }}
        pagination={paginationOptions}
        request={async params => {
          const { current = 1, pageSize = 10, ...searchData } = params
          try {
            const result = await runAsync({ current, pageSize, query: searchData })
            const tableData = transformTableData(result)
            return tableData
          } catch (error) {
            toast.error('获取菜单列表数据失败!')
            return {
              success: false
            }
          }
        }}
        rowKey='id'
        search={{
          labelWidth: 'auto'
        }}
        headerTitle='菜单列表'
        toolBarRender={() => [
          <Button type='primary' onClick={handleCreate}>
            新增
          </Button>
        ]}
        onLoad={dataSource => {
          setData(() => dataSource)
        }}
      />
      <EditMenu mRef={menuRef} update={() => actionRef.current?.reload()} />
    </>
  )
}
export default MenuManage
