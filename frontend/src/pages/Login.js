import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import AlertErrorInput from '../components/AlertErrorInput';
import RegisterUserValidation from '../validations/RegisterUserValidation';
import notification from "../utils/Notification"
import userService from "../services/UserService"
import HandlerHttpError from '../utils/HandlerHttpError';
import App from '../constants/App';

export default (props) => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: RegisterUserValidation,
        onSubmit: async (values) => {
            try {
                const data = await userService.login(values);
                localStorage.setItem(App.LOCALSTORAGE.ACCESS_TOKEN, data.accessToken)
                notification.success("Login efetuado com sucesso!")
                props.history.push(App.ROUTES.LIST_NEWS)
            } catch(error) {
                notification.warning(HandlerHttpError(error).join("\n"))
            }
        },
    });

    return (
        <>
            <br />
            <h1>Login</h1>
            <Form onSubmit={formik.handleSubmit}>
                <FormGroup>
                    <Label for="email">Email:</Label>
                    <Input type="email" name="username"
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        id="email" placeholder="with a placeholder" />
                    <AlertErrorInput formik={formik} field="username" />

                </FormGroup>
                <FormGroup>
                    <Label for="password">Password:</Label>
                    <Input type="password" name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    <AlertErrorInput formik={formik} field="password" />

                </FormGroup>
                <br />
                <Button>Logar</Button>&nbsp;
                <Link to={App.ROUTES.REGISTER}><Button>Cadastrar-se</Button></Link>

            </Form>
        </>
    )
}