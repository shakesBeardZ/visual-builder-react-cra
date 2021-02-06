import React from 'react'
import { connect } from 'react-redux'
import { Input, Button, Radio, Form } from 'antd'
import { Link } from 'react-router-dom'
import style from '../style.module.scss'

const mapStateToProps = ({ user, settings, dispatch }) => ({
  dispatch,
  user,
  authProvider: settings.authProvider,
})

const Login = ({ dispatch, user, authProvider }) => {
  const onFinish = (values) => {
    dispatch({
      type: 'user/LOGIN',
      payload: values,
    })
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const changeAuthProvider = (value) => {
    dispatch({
      type: 'settings/CHANGE_SETTING',
      payload: {
        setting: 'authProvider',
        value,
      },
    })
  }

  return (
    <div className="mt-5 pt-2">
      <div className={`card ${style.container}`}>
        <div className="text-dark font-size-32 mb-3">Sign In</div>
        <div className="mb-4">
          Login and password
          <br />
          <strong>demo@visualbuilder.cloud / VisualBuilder</strong>
        </div>
        <div className="mb-4">
          <Radio.Group onChange={(e) => changeAuthProvider(e.target.value)} value={authProvider}>
            <Radio value="jwt">JWT</Radio>
            <Radio value="firebase">Firebase</Radio>
          </Radio.Group>
        </div>
        <Form
          layout="vertical"
          hideRequiredMark
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="mb-4"
          initialValues={{ email: 'demo@visualbuilder.cloud', password: 'VisualBuilder' }}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your e-mail address' }]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password' }]}
          >
            <Input type="password" placeholder="Password" />
          </Form.Item>
          <Button
            type="primary"
            className="text-center w-100 btn btn-success"
            htmlType="submit"
            loading={user.loading}
          >
            <strong>Sign in</strong>
          </Button>
        </Form>
        <Link to="/auth/forgot-password" className="vb__utils__link">
          Forgot Password?
        </Link>
      </div>
      <div className="text-center pt-2 mb-auto">
        <span className="mr-2">Don&#39;t have an account?</span>
        <Link to="/auth/register" className="vb__utils__link">
          Sign up
        </Link>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Login)
