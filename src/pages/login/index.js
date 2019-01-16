import React from 'react';
import { LoginWrapper, LoginForm, ButtonFormItem, Input } from './style';

const Login = () => {
  return (
    <LoginWrapper>
      <LoginForm>
        <Input placeholder="手机号或邮箱" className="account" />
        <Input type="password" placeholder="密码" />
        <ButtonFormItem>登录</ButtonFormItem>
      </LoginForm>
    </LoginWrapper>
  );
};

export default Login;
