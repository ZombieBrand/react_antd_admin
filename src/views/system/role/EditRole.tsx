import { Modal, Form, Input, Tree, Spin } from 'antd'
import { useImperativeHandle, useState } from 'react'
import { IAction } from '@/constant/editType'
import { IModalProp } from '@/types/modal'
import toast from 'react-hot-toast'
import { getMenuAllListApi } from '@/api/system/menu'
import type { TreeProps } from 'antd'
import { useRequest } from 'ahooks'
import type { IMenuItem } from '@/types/api/menu'

const { TextArea } = Input
const EditUser = (props: IModalProp<any>) => {
  const [form] = Form.useForm()
  const [visible, setVisible] = useState(false)
  const [action, setAction] = useState<IAction>(IAction.CREATE)
  const [loading, setLoading] = useState(false)
  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>([])
  const [treeData, setTreeData] = useState<any[]>([])

  const { loading: getDataLoading } = useRequest(getMenuAllListApi, {
    cacheKey: 'getPermissions',
    onSuccess: result => {
      console.log('%c [ result ]-23', 'font-size:13px; background:#5714c1; color:#9b58ff;', result)
      setTreeData(result)
    },
    onError: error => {
      console.log('%c [ error ]-26', 'font-size:13px; background:#1ffea9; color:#63ffed;', error)
      toast.error('获取权限配置信息失败!')
      setTreeData([])
      handleCancel()
    }
  })

  const onCheck: TreeProps['onCheck'] = (checkedKeysValue, item) => {
    setCheckedKeys(checkedKeysValue as React.Key[])
    const checkedKeys: string[] = []
    const parentKeys: string[] = []
    const checkedNodes = item.checkedNodes as unknown as IMenuItem[]
    const halfCheckedKeys = (item.halfCheckedKeys as string[]) || []
    for (const node of checkedNodes) {
      if (node.menuType === 2) {
        checkedKeys.push(node.id)
      } else {
        parentKeys.push(node.id)
      }
    }
    form.setFieldValue('permissions', {
      checkedKeys: checkedKeysValue,
      halfCheckedKeys: [...parentKeys, ...halfCheckedKeys]
    })
  }

  // 暴露子组件open方法
  useImperativeHandle(props.mRef, () => {
    return {
      open
    }
  })

  // 调用弹框显示方法
  const open = (type: IAction, data?: any) => {
    console.log('%c [ data ]-62', 'font-size:13px; background:#3c6b4c; color:#80af90;', data)
    setAction(type)
    setVisible(true)
    setCheckedKeys([])
    if (type === IAction.UPDATE && data) {
      form.setFieldsValue(data)
    }
  }

  const handleSubmit = async () => {
    const valid = await form.validateFields()
    setLoading(true)
    if (valid) {
      const params = {
        ...form.getFieldsValue()
      }
      console.log(params, 'handleSubmit')
      if (action === IAction.CREATE) {
        toast.success('新建成功')
      } else {
        toast.success('编辑成功')
      }
      props.update()
      setLoading(false)
      handleCancel()
      form.resetFields()
    }
  }
  const handleCancel = () => {
    setVisible(false)
    form.resetFields()
  }

  return (
    <Spin spinning={getDataLoading}>
      <Modal title={action === IAction.CREATE ? '新建角色' : '编辑角色'} okText='确定' cancelText='取消' open={visible} onOk={handleSubmit} onCancel={handleCancel} confirmLoading={loading}>
        <Form form={form} labelCol={{ span: 4 }} labelAlign='right' name='editUser'>
          <Form.Item name='id' hidden>
            <Input></Input>
          </Form.Item>
          <Form.Item
            label='角色名称'
            name='roleName'
            rules={[
              { required: true, message: '请输入角色名称' },
              { min: 2, max: 12, message: '角色名称最小2个字符，最大12个字符' }
            ]}
          >
            <Input placeholder='请输入角色名称'></Input>
          </Form.Item>
          <Form.Item label='权限配置' name='permissions'>
            <Tree checkable defaultExpandAll onCheck={onCheck} checkedKeys={checkedKeys} treeData={treeData} fieldNames={{ title: 'menuName', children: 'children', key: 'id' }} />
          </Form.Item>
          <Form.Item label='备注' name='description'>
            <TextArea rows={4}></TextArea>
          </Form.Item>
        </Form>
      </Modal>
    </Spin>
  )
}

export default EditUser
