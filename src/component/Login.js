import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage, FormikHelpers, } from 'formik';
import { connect } from 'react-redux';
import { fetchUser,} from '../action/actionCreator';
import * as Yup from 'yup';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
        }
    }

    ShowPassword = () => {
        this.setState(function (prevState) {
            return {
                show: !prevState.show
            };
        });
        console.log('show', this.state.show);
    }
    render() {
        const { show } = this.state;
        console.log('show', show)
        const { ShowPassword } = this;
        return (
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                    password: Yup.string()
                        .min(6, 'Password must be at least 6 characters')
                        .required('Password is required'),
                    confirmPassword: Yup.string()
                        .oneOf([Yup.ref('password')], 'Passwords must match')
                        .required('Confirm Password is required')
                })}
                onSubmit={fields => {
                    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
                    this.props.fetchUser(fields);
                }}
                render={({ errors, status, touched }) => (
                    <Form style={{
                        width: 600, border: '1px solid #ccc', margin: '200px auto', padding: '40px', borderRadius: "16px",
                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
                    }}>
                        <h1>LOGIN</h1>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field name="password" type={show ? 'password' : 'text'} className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <Field name="confirmPassword" type={show ? 'password' : 'text'} className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                            <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                        </div>
                        <div style={{
                            height: '40px'
                        }}>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" onClick={ShowPassword} style={{ padding: '4px' }} /> <label htmlFor="vehicle1">Check to display password</label>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2">Submit</button>
                            <button type="reset" className="btn btn-secondary">Reset</button>
                        </div>
                    </Form>
                )}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = {
    fetchUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
