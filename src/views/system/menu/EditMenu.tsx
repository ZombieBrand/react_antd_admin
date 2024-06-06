import { Modal, Form, Input, TreeSelect, Radio, InputNumber } from 'antd'
import { useImperativeHandle, useState } from 'react'
import { IAction } from '@/constant/editType'
import { IModalProp } from '@/types/modal'
import { useRouterStore } from '@/store/modules/router'
import toast from 'react-hot-toast'
import { InfoCircleOutlined } from '@ant-design/icons'

const EditMenu = (props: IModalProp<any>) => {
  const [form] = Form.useForm()
  const [visible, setVisible] = useState(false)
  const [action, setAction] = useState<IAction>(IAction.CREATE)
  const [loading, setLoading] = useState(false)
  const menuList = useRouterStore(state => state.menuList)
  const updateMenuList = useRouterStore(state => state.updateMenuList)
  // 暴露子组件open方法
  useImperativeHandle(props.mRef, () => {
    return {
      open
    }
  })

  // 调用弹框显示方法
  const open = (type: IAction, data?: any) => {
    setAction(type)
    setVisible(true)
    updateMenuList()
    if (data) {
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
        toast.success('新增成功')
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
    <Modal title={action === IAction.CREATE ? '新增菜单' : '编辑菜单'} okText='确定' cancelText='取消' open={visible} onOk={handleSubmit} onCancel={handleCancel} confirmLoading={loading}>
      <Form form={form} labelAlign='right' labelCol={{ span: 4 }} initialValues={{ menuType: 1, menuState: 1 }} name='editMenu'>
        <Form.Item hidden name='id'>
          <Input />
        </Form.Item>
        <Form.Item label='上级菜单' name='parentId'>
          <TreeSelect placeholder='请选择父级菜单' allowClear treeDefaultExpandAll fieldNames={{ label: 'menuName', value: 'id' }} treeData={menuList} />
        </Form.Item>
        <Form.Item label='菜单类型' name='menuType'>
          <Radio.Group>
            <Radio value={1}>菜单</Radio>
            <Radio value={2}>按钮</Radio>
            <Radio value={3}>页面</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label='菜单名称' name='menuName' rules={[{ required: true, message: '请输入菜单名称' }]}>
          <Input placeholder='请输入菜单名称' />
        </Form.Item>
        <Form.Item noStyle shouldUpdate>
          {() => {
            return form.getFieldValue('menuType') === 2 ? (
              <Form.Item label='权限标识' name='menuCode'>
                <Input placeholder='请输入权限标识' />
              </Form.Item>
            ) : (
              <>
                <Form.Item label='菜单图标' name='icon'>
                  <Input placeholder='请输入菜单图标' />
                </Form.Item>
                <Form.Item label='路由地址' name='path'>
                  <Input placeholder='请输入路由地址' />
                </Form.Item>
              </>
            )
          }}
        </Form.Item>
        <Form.Item label='组件名称' name='component'>
          <Input placeholder='请输入组件名称' />
        </Form.Item>
        <Form.Item label='排序' name='orderBy' tooltip={{ title: '排序值越大越靠后', icon: <InfoCircleOutlined rev={undefined} /> }}>
          <InputNumber placeholder='请输入排序值' />
        </Form.Item>
        <Form.Item label='菜单状态' name='menuState'>
          <Radio.Group>
            <Radio value={1}>启用</Radio>
            <Radio value={2}>停用</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default EditMenu
