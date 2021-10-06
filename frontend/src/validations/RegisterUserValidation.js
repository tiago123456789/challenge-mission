import * as Yup from 'yup';

export default Yup.object().shape({
    username: Yup.string()
        .required('O campo é obrigatório.'),
    password: Yup.string()
        .required('O campo é obrigatório.'),
});