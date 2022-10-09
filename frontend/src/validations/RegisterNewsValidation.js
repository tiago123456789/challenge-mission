import * as Yup from 'yup';

export default Yup.object().shape({
    title: Yup.string()
        .required('O campo é obrigatório.'),
    description: Yup.string()
        .required('O campo é obrigatório.'),
});