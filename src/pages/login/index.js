import React from 'react';
import {
  LoginWrapper,
  LoginForm,
  UsernameFormItem,
  PasswordFormItem,
  ButtonFormItem
} from './style';

const Login = () => {
  return (
    <LoginWrapper>
      <LoginForm>
        <UsernameFormItem>
          <input placeholder="手机号或邮箱" className="username" />
        </UsernameFormItem>
        <PasswordFormItem>
          <input type="password" placeholder="密码" className="password" />
        </PasswordFormItem>
        <ButtonFormItem>登录</ButtonFormItem>
      </LoginForm>
    </LoginWrapper>
  );
};

export default Login;
