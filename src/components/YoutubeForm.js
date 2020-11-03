import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';


const onSubmit = values => {
    console.log('Form data ' + JSON.stringify(values))
}

const initialValues = {
    name: 'Ashish',
    email: '',
    channel: '',
    address: '',
    social: {
        facebook:'',
        twitter: ''
    },
    phoneNumbers: ['','']
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

const YoutubeForm = () => {

//console.log('Form errors', formik.touched);

return (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        <Form>

            <div className='form-control'>
                <label htmlFor="name">Name</label>
                <Field type="text" id="name" name="name"/>
                <ErrorMessage name="name" component={TextError}/>
            </div>

            <div className='form-control'>
                <label htmlFor="email">E-mail</label>
                <Field type="email" id="email" name="email"/>
                <ErrorMessage name="email"/>
            </div>

            <div className='form-control'>
                <label htmlFor="channel">Channel</label>
                <Field type="text" id="channel" name="channel"/>
                <ErrorMessage name="channel">
                    {
                        errorMsg =>  <div className='error'>{errorMsg}</div>
                    }
                </ErrorMessage>
            </div>

            <div className='form-control'>
                <label htmlFor='address'>Address</label>
                <Field name='address'>
                    {
                        (props)=> {
                            const {field,  form, meta} = props
                            return (
                            <>
                            <input type="text" id='address' {...field} />
                            {meta.touched  && meta.error ? <div>{meta.error}</div> : null }
                            </>
                            )
                        }
                    }
                </Field>

            </div>

            <div className='form-control'>
                <label htmlFor="facebook">Facebook link</label>
                <Field type="text" id="facebook" name="social.facebook"/>
            </div>

            <div className='form-control'>
                <label htmlFor="twitter">Twitter link</label>
                <Field type="text" id="twitter" name="social.twitter"/>
            </div>


            <div className='form-control'>
                <label htmlFor="primaryPhone">Primary phone</label>
                <Field type="text" id="primaryPhone" name="phoneNumbers[0]"/>
            </div>

            <div className='form-control'>
                <label htmlFor="secondaryPhone">Secondary phone</label>
                <Field type="text" id="secondaryPhone" name="phoneNumbers[1]"/>
            </div>
            <button type="submit">Submit</button>
        </Form>
    </Formik>
)
}

export default YoutubeForm;