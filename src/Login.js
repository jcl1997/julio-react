import React, { Component, Fragment } from 'react';
import { withFormik } from 'formik';
import * as rules from './rules';
import './css/login.css';
import UserIcon from './img/login/user6.png'

class Login extends Component {
  render() {
    const {
      handleChange,
      handleSubmit,
      values,
      errors
    } = this.props;

    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <Fragment>
            <div className="usuario">
                <img src={UserIcon} alt="User" />
            </div>
            <div  className="login">
                <h1>Login</h1>
                <div>
                    <p>Usuário</p>
                    <input
                      id="user"
                      name="user"
                      onChange={handleChange}
                      type="email"
                      value={values.user}
                      placeholder="Insira seu nome de usuário" />
                      <p>{errors.user}</p>
                </div>
                <div>
                    <p>Senha</p>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      onChange={handleChange}
                      value={values.password}
                      errors={errors.password}
                      placeholder="Insira sua senha" />
                      <p>{errors.password}</p>
                </div>
                <div>
                    <input
                      type="submit"
                      name="login"
                      id="login"
                      value="Login"
                      onSubmit={handleSubmit} />
                </div>
                <div>
                    <ul>
                        <li><a href="#">Ainda não possui uma conta?</a></li>
                        <li><a href="#">Esqueceu sua senha?</a></li>
                    </ul>
                </div>
            </div>
          </Fragment>
        </form>
      </div>
    );
  }
}

export default withFormik({
  validationOnChange: false,
  mapPropsToValues: () => ({
    user: 'dev@usportgo.com',
    password: '123456'
  }),
  handleSubmit: () => {},
  validationSchema: rules.join({
    user: rules.email(),
    password: rules.required()
  }),
  displayName: 'LoginForm',
})(Login);