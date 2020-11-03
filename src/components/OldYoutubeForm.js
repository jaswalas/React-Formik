import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const onSubmit = values => {
    console.log('Form data ' + JSON.stringify(values))
}

const initialValues = {
    name: 'Ashish',
    email: '',
    channel: ''
}

const validate = values => {
    let errors = {};

    if (!values.name) {
        errors.name = 'Required'
    }
    if (!values.email) {
        errors.email = 'Required'
    }
    if (!values.channel) {
        errors.channel = 'Required'
    }
    return errors;
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().required('Required'),
    channel: Yup.string().required('Required')
})

const OldYoutubeForm = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
       // validate
       validationSchema
    })

  console.log('Form errors', formik.touched);

    return (
        <>
            <form onSubmit={formik.handleSubmit}>

                <div className='form-control'>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name"
                        onChange={formik.handleChange}
                        onBlur = {formik.handleBlur}
                        value={formik.values.name} />
                    {formik.touched.name && formik.errors.name ?
                        <div className="error">Name is required</div> :
                        null}
                </div>

                <div className='form-control'>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email"
                        onChange={formik.handleChange}
                        onBlur = {formik.handleBlur}
                        value={formik.values.email} />
                    {formik.touched.email && formik.errors.email ?
                        <div className="error">Email is required</div> :
                        null}
                </div>

                <div className='form-control'>
                    <label htmlFor="email">Channel</label>
                    <input type="text" id="channel" name="channel"
                        onChange={formik.handleChange}
                        onBlur = {formik.handleBlur}
                        value={formik.values.channel} />
                    {formik.touched.channel && formik.errors.channel ?
                        <div className="error">Channel is required</div> :
                        null}
                </div>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default OldYoutubeForm;