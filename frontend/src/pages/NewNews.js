import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import AlertErrorInput from '../components/AlertErrorInput';
import RegisterNewsValidation from '../validations/RegisterNewsValidation';
import notification from "../utils/Notification"
import newsService from "../services/NewsService"
import HandlerHttpError from '../utils/HandlerHttpError';
import App from '../constants/App';

export default (props) => {
    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
        },
        validationSchema: RegisterNewsValidation,
        onSubmit: async (values, { resetForm }) => {
            try {
                const data = await newsService.create(values);
                resetForm();
                notification.success("Criada com sucesso!")
            } catch(error) {
                notification.warning(HandlerHttpError(error).join("\n"))
            }
        },
    });

    return (
        <> 
            <br />
            <h1>Cadastrar notícia</h1>
            <Form onSubmit={formik.handleSubmit}>
                <FormGroup>
                    <Label for="title">Título:</Label>
                    <Input type="text" name="title"
                        onChange={formik.handleChange}
                        value={formik.values.title}
                        id="title"/>
                    <AlertErrorInput formik={formik} field="title" />

                </FormGroup>
                <FormGroup>
                    <Label for="description">Descrição:</Label>
                    <Input type="text" name="description"
                        onChange={formik.handleChange}
                        value={formik.values.description}
                    />
                    <AlertErrorInput formik={formik} field="description" />

                </FormGroup>
                <br />
                <Button>Salvar</Button>&nbsp;
                <Link to={App.ROUTES.LIST_NEWS}><Button>Cancelar</Button></Link>
            </Form>
        </>
    )
}