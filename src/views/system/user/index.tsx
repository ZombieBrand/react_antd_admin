import type { ActionType, ProColumns } from '@ant-design/pro-components'
import { ProTable } from '@ant-design/pro-components'
import { App, Button } from 'antd'
import { useRef } from 'react'
import EditUser from './EditUser'
import { IAction } from '@/constant/editType'
import { getUserListApi } from '@/api/users/user'
import { useRequest } from 'ahooks'
import { transformTableData } from '@/utils/table'
import type { IUserData } from '@/types/api/user'
import { useTableScrollY } from '@/hook/useTable'
import toast from 'react-hot-toast'
import { paginationOptions } from '@/config/table'
import { useOptionsStore } from '@/store/modules/options'

const UserManage = () => {
  const { modal } = App.useApp()
  const updateRoleOptions = useOptionsStore(state => state.updateRoleOptions)
  const updateRoleStatusOptions = useOptionsStore(state => state.updateRoleStatusOptions)
  const roleOptions = useOptionsStore(state => state.roleOptions)
  const roleStatusOptions = useOptionsStore(state => state.roleStatusOptions)
  const actionRef = useRef<ActionType>()

  const { runAsync } = useRequest(getUserListApi)
  const userRef = useRef<{
    open: (type: IAction, data?: IUserData) => void
  }>()

  // 创建用户
  const handleCreate = () => {
    userRef.current?.open(IAction.CREATE)
  }

  // 编辑用户
  const handleEdit = (record: IUserData) => {
    userRef.current?.open(IAction.UPDATE, record)
  }
  // 公共删除用户接口
  const handleUserDelSubmit = async (ids: string[]) => {
    console.log(ids, 'handleUserDelSubmit')
  }
  // 删除用户
  const handleDel = (id: string) => {
    modal.confirm({
      title: '删除确认',
      content: <span>确认删除该用户吗？</span>,
      onOk: () => {
        handleUserDelSubmit([id])
      }
    })
  }
  const columns: ProColumns<IUserData>[] = [
    {
      title: '用户名',
      dataIndex: 'userName'
    },
    {
      title: '登录账号',
      dataIndex: 'account'
    },
    {
      title: '用户邮箱',
      dataIndex: 'userEmail'
    },
    {
      title: '状态',
      dataIndex: 'state',
      valueType: 'select',
      fieldProps: {
        options: roleStatusOptions
      }
    },
    {
      title: '角色',
      dataIndex: 'role',
      valueType: 'select',
      fieldProps: {
        options: roleOptions
      }
    },
    {
      title: '更新时间',
      dataIndex: 'updated_at',
      valueType: 'date'
    },
    {
      title: '操作',
      valueType: 'option',
      key: 'option',
      width: 200,
      render: (_, record) => {
        return [
          <Button type='primary' key='edit' onClick={() => handleEdit(record)}>
            编辑
          </Button>,
          <Button type='primary' danger key='delete' onClick={() => handleDel(record.id)}>
            删除
          </Button>
        ]
      }
    }
  ]
  return (
    <>
      <ProTable<IUserData>
        columns={columns}
        actionRef={actionRef}
        cardBordered={true}
        scroll={{ y: useTableScrollY() }}
        pagination={paginationOptions}
        request={async params => {
          const { current = 1, pageSize = 10, ...searchData } = params
          try {
            Promise.all([updateRoleOptions(), updateRoleStatusOptions()])
            const result = await runAsync({ current, pageSize, query: searchData })
            const tableData = transformTableData(result)
            return tableData
          } catch (error) {
            toast.error('获取用户列表失败')
            return {
              success: false
            }
          }
        }}
        rowKey='id'
        search={{
          labelWidth: 'auto'
        }}
        headerTitle='用户列表'
        toolBarRender={() => [
          <Button type='primary' onClick={handleCreate}>
            新建用户
          </Button>
        ]}
      />
      <EditUser mRef={userRef} update={() => actionRef.current?.reload()} />
    </>
  )
}
export default UserManage
