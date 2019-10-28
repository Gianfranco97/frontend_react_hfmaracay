import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import logo from "assets/images/hf_maracay.jpeg"
import './styles.css';

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Valores recibidos: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <img src={logo} alt="H/F Maracay" />
        <Form.Item>
          {getFieldDecorator('nombre', {
            rules: [{ required: true, message: '¡Por favor ingrese su nombre de usuario!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Nombre"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('contrasena', {
            rules: [{ required: true, message: '¡Por favor ingrese su contraseña!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Contraseña"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('recuerda', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Recuérdame</Checkbox>)}
          <a className="login-form-forgot" href="/">
            ¿Se te olvidó tu contraseña?
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Iniciar sesión
          </Button>
          O <a href="/">¡Regístrate ahora!</a>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm