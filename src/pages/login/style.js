import styled from 'styled-components';

export const LoginWrapper = styled.div`
  min-height: 100vh;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
`;

export const LoginForm = styled.div`
  width: 400px;
  height: 260px;
  margin: 160px auto;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  display: inline-block;
`;

export const UsernameFormItem = styled.div`
  .username {
    width: 100%;
    height: 50px;
    margin-bottom: 0;
    padding: 4px 12px 4px 20px;
    border: 1px solid #c8c8c8;
    border-bottom: none;
    border-radius: 4px 4px 0 0;
    background-color: hsla(0, 0%, 71%, 0.1);
    outline: none;
  }
`;

export const PasswordFormItem = styled.div`
  .password {
    width: 100%;
    height: 50px;
    margin-bottom: 0;
    padding: 4px 12px 4px 20px;
    border: 1px solid #c8c8c8;
    border-radius: 0 0 4px 4px;
    background-color: hsla(0, 0%, 71%, 0.1);
  }
`;

export const ButtonFormItem = styled.button`
  background: #3194d0;
  margin-top: 20px;
  padding: 9px 18px;
  width: 100%;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  color: #fff;
  cursor: pointer;
  outline: none;
`;
