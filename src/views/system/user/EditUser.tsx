import { Modal, Form, Input, Select } from 'antd'
import { useImperativeHandle, useState } from 'react'
import { IAction } from '@/constant/editType'
import { IModalProp } from '@/types/modal'
import { useOptionsStore } from '@/store/modules/options'
import toast from 'react-hot-toast'

const EditUser = (props: IModalProp<any>) => {
  const [form] = Form.useForm()
  const [visible, setVisible] = useState(false)
  const [action, setAction] = useState<IAction>(IAction.CREATE)
  const [loading, setLoading] = useState(false)
  const roleOptions = useOptionsStore(state => state.roleOptions)
  const roleStatusOptions = useOptionsStore(state => state.roleStatusOptions)

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
    if (type === IAction.UPDATE && data) {
      form.setFieldsValue(data)
    }
  }

  const handleSubmit = async () => {
    const valid = await form.validateFields()
    setLoading(true)
    console.log(valid)
    if (valid) {
      const params = {
        ...form.getFieldsValue()
      }
      console.log(params, 'handleSubmit')
      if (action === IAction.CREATE) {
        toast.success('创建成功')
      } else {
        toast.success('修改成功')
      }
      props.update()
      setTimeout(() => {
        setLoading(false)
        handleCancel()
      }, 1500)
    }
  }
  const handleCancel = () => {
    setVisible(false)
    form.resetFields()
  }

  return (
    <Modal title={action === IAction.CREATE ? '创建用户' : '编辑用户'} okText='确定' cancelText='取消' open={visible} onOk={handleSubmit} onCancel={handleCancel} confirmLoading={loading}>
      <Form form={form} labelCol={{ span: 4 }} labelAlign='right'>
        <Form.Item name='userId' hidden>
          <Input />
        </Form.Item>
        <Form.Item
          label='用户名称'
          name='userName'
          rules={[
            { required: true, message: '请输入用户名称' },
            { min: 2, max: 12, message: '用户名称最小2个字符，最大12个字符' }
          ]}
        >
          <Input placeholder='请输入用户名称'></Input>
        </Form.Item>
        <Form.Item
          label='登录账号'
          name='account'
          rules={[
            { required: true, message: '请输入登录账号' },
            { min: 5, max: 20, message: '登录账号最小5个字符，最大20个字符' }
          ]}
        >
          <Input placeholder='请输入用户名称'></Input>
        </Form.Item>
        <Form.Item
          label='登录密码'
          name='password'
          rules={[
            { required: true, message: '请输入登录密码' },
            { min: 5, max: 20, message: '登录密码最小5个字符，最大20个字符' }
          ]}
        >
          <Input.Password placeholder='请输入用户名称' />
        </Form.Item>
        <Form.Item
          label='用户邮箱'
          name='userEmail'
          rules={[
            { required: true, message: '请输入用户邮箱' },
            { type: 'email', message: '请输入正确的邮箱' }
          ]}
        >
          <Input placeholder='请输入用户邮箱' disabled={action === IAction.UPDATE}></Input>
        </Form.Item>
        <Form.Item label='状态' name='state'>
          <Select>
            {roleStatusOptions.map(item => (
              <Select.Option value={item.value}>{item.label}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label='系统角色' name='roleList'>
          <Select placeholder='请选择角色'>
            {roleOptions.map(item => {
              return (
                <Select.Option value={item.value} key={item.value}>
                  {item.label}
                </Select.Option>
              )
            })}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default EditUser
