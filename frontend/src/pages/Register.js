import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useFormik } from "formik";
import AlertErrorInput from '../components/AlertErrorInput';
import RegisterUserValidation from '../validations/RegisterUserValidation';
import notification from "../utils/Notification"
import userService from "../services/UserService"
import HandlerHttpError from '../utils/HandlerHttpError';

export default () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: RegisterUserValidation,
        onSubmit: async (values, { resetForm }) => {
            try {
                await userService.create(values);
                notification.success("Conta criado com sucesso!")
                resetForm();
            } catch(error) {
                notification.warning(HandlerHttpError(error).join("\n"))
            }
        },
    });

    return (
        <>
            <br />
            <h1>Registrar usuário</h1>
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
                <Button>Cadastrar</Button>
            </Form>
        </>
    )
}