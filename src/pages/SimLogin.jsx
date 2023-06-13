import React from 'react';
import propTypes from 'prop-types';
import {useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

function SimLogin({ setUser }) {
    const navigate = useNavigate()

    return (
        <div>
            <h1>Connexion</h1>
            <Formik
                initialValues={{login: '', password: ''}}
                validationSchema={Yup.object({
                    login: Yup.string()
                        .required('Un identifiant est nécéssaire')
                        .min(2, 'Votre identifiant doit contenir au moins 2 caractères')
                        .max(50, 'Votre identifiant doit contenir moins de 50 caractères'),
                    password: Yup.string()
                        .required('Un mot de passe est nécéssaire')
                        .min(8, 'Votre mot de passe doit contenir au moins 8 caractères'),
                })}
                onSubmit={async (values, {setSubmitting}) => {
                    navigate('/')
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="login"
                                   className='form-label'>Identifiant</label>
                            <Field type="text"
                                   className='form-control'
                                   id='login'
                                   name="login"/>
                            <ErrorMessage name="login" component="div" className="alert alert-warning"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password"
                                   className='form-label'>Mot de passe</label>
                            <Field type="password"
                                   className="form-control"
                                   id="password"
                                   name="password"/>
                            <ErrorMessage name="password" component="div" className="alert alert-warning"/>
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary btn-expand" disabled={isSubmitting}>Valider</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

SimLogin.propTypes = {
  setUser: propTypes.func.isRequired
}

export default SimLogin;