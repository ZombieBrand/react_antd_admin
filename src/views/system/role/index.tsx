import type { ActionType, ProColumns } from '@ant-design/pro-components'
import { ProTable } from '@ant-design/pro-components'
import { App } from 'antd'
import { useRef } from 'react'
import EditRole from '@/views/system/role/EditRole'
import { IAction } from '@/constant/editType'
import { getRoleListApi } from '@/api/system/role'
import { useRequest } from 'ahooks'
import { transformTableData } from '@/utils/table'
import type { IRoleData } from '@/types/api/role'
import { useTableScrollY } from '@/hook/useTable'
import toast from 'react-hot-toast'
import { paginationOptions } from '@/config/table'
import AuthButton from '@/components/AuthButton'

const RoleManage = () => {
  const { modal } = App.useApp()
  const actionRef = useRef<ActionType>()

  const { runAsync } = useRequest(getRoleListApi)
  const userRef = useRef<{
    open: (type: IAction, data?: IRoleData) => void
  }>()

  // 创建用户
  const handleCreate = () => {
    userRef.current?.open(IAction.CREATE)
  }

  // 编辑用户
  const handleEdit = (record: IRoleData) => {
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
      content: <span>确认删除该角色吗？</span>,
      onOk: () => {
        handleUserDelSubmit([id])
      }
    })
  }
  const columns: ProColumns<IRoleData>[] = [
    {
      title: '角色名称',
      dataIndex: 'roleName'
    },
    {
      title: '备注',
      dataIndex: 'description',
      search: false
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
          <AuthButton auth='role@edit' type='primary' key='edit' onClick={() => handleEdit(record)}>
            编辑
          </AuthButton>,
          <AuthButton auth='role@delete' type='primary' danger key='delete' onClick={() => handleDel(record.id)}>
            删除
          </AuthButton>
        ]
      }
    }
  ]
  return (
    <>
      <ProTable<IRoleData>
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
            toast.error('获取角色列表失败')
            return {
              success: false
            }
          }
        }}
        rowKey='id'
        search={{
          labelWidth: 'auto'
        }}
        headerTitle='角色列表'
        toolBarRender={() => [
          <AuthButton auth='role@create' type='primary' onClick={handleCreate}>
            新建角色
          </AuthButton>
        ]}
      />
      <EditRole mRef={userRef} update={() => actionRef.current?.reload()} />
    </>
  )
}
export default RoleManage
