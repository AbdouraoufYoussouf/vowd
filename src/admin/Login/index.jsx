import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { login } from "../../services/authServices"
import { AuthContext } from "../../context/AuthContext"
import { notifySuccess } from "../../context/Notify"

// styles
import "./m-login.css"

const Login = () => {
    const navigate = useNavigate();
    const { setIsAuthenticated,logout } = useContext(AuthContext)

    const [errorEmail, setErrorEmail] = useState([])
    const [errorPassword, setErrorPassword] = useState([])
    const [errorMessages, setErrorMessages] = useState("")


    const validationSchema = Yup.object({
        email: Yup.string()
            .email("email invalide")
            .required("L'email est obligatoire"),
        password: Yup.string().required("Le mot de passe est obligatoire"),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            auth(values.email, values.password)
        },
    });

    const auth = async (email, password) => {
        try {
            const result = await login(email, password)
            if (result.success === false) {
                const errors = result?.error;
                if (errors.status === 429) {
                    console.log("error:", errors.data.error)
                    setErrorMessages(errors.data.error)
                    setErrorEmail("")
                    setErrorPassword("")
                } else {
                    if (errors.data.error.errorEmail) {
                        setErrorEmail(errors.data.error.errorEmail)
                    }
                    if (errors.data.error.errorPassword) {
                        setErrorPassword(errors.data.error.errorPassword)
                    }
                }
            } else {
                const data = result.response.data
                const token = data.token
                notifySuccess(data.message)
                navigate("/dashboard/costumers");
                setIsAuthenticated(true)
                // Stockez le token dans le localStorage
                localStorage.setItem("token", token)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const onChangeColor = (e) => {
        if (e.target.focus() === true) {
            e.target.style.backgroundColor = "white"
        }
    }

    const onFocusColor = (e) => {
        e.target.style.backgroundColor = "white"
    }

    const onBlurColor = (e) => {
        if (e.target.value !== "") {
            e.target.style.backgroundColor = "white"
        } else {
            e.target.style.backgroundColor = "rgba(0, 62, 88, 0.4)"
        }
    }

    const onBlurErrorEmail = () => {
        if (document.getElementById('email').style.backgroundColor === 'rgba(0, 62, 88, 0.4)') {
            formik.touched.email = null
            formik.errors.email = null
            setErrorEmail('')
        }
    }
    const onBlurErrorPassword = () => {
        if (document.getElementById('password').style.backgroundColor === 'rgba(0, 62, 88, 0.4)') {
            formik.touched.password = null
            formik.errors.password = null
            setErrorPassword('')
        }
    }

    // Cette fonction réinitialisera errorMessages après 5 secondes s'il n'est pas vide
    const resetErrorMessages = () => {
        if (errorMessages) {
            setTimeout(() => {
                setErrorMessages("")
            }, 5000); // Réinitialiser après 5 secondes (5000 millisecondes)
        }
    }

    // Utilisez useEffect pour appeler la fonction resetErrorMessages lorsque errorMessages change
    useEffect(() => {
        resetErrorMessages()
        logout()
    }, [errorMessages])


    return (
        <section className="login">
            <p className="login__header">
                Cet espace est strictement réservé à l'administrateur du site.
                <br />
                Veuillez retourner à la <Link to="/">page d'accueil</Link>.
            </p>
            <h1 className="login__title">Connexion</h1>
            <form
                onSubmit={formik.handleSubmit}
                id="form-login"
                className="form form-login"
                method="post"
            >
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input
                        onChange={(e) => { formik.handleChange(e); onChangeColor(e); setErrorEmail('') }}
                        onBlur={(e) => { formik.handleBlur(e); onBlurColor(e); onBlurErrorEmail() }}
                        onFocus={(e) => { formik.handleBlur(e); onFocusColor(e); }}
                        id='email'
                        type='text'
                        name='email'
                        placeholder='Email*'
                        className='form-control'
                        aria-label='email'
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <span className='error-message'>{formik.errors.email}</span>
                    ) : null}
                    {errorEmail && <span className='error-message'>{errorEmail}</span>}
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input
                        onChange={(e) => { formik.handleChange(e); onChangeColor(e); setErrorPassword('') }}
                        onBlur={(e) => { formik.handleBlur(e); onBlurColor(e); onBlurErrorPassword() }}
                        onFocus={(e) => { formik.handleBlur(e); onFocusColor(e); }}
                        id='password'
                        type='text'
                        name='password'
                        placeholder='Password*'
                        className='form-control'
                        aria-label='password'
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <span className='error-message'>{formik.errors.password}</span>
                    ) : null}
                    {errorPassword && <span className='error-message'>{errorPassword}</span>}
                    {errorMessages && <span className='error-message'>{errorMessages}</span>}
                </div>
                <button className="formSubmit contact-submit" type="submit">
                    Envoyer
                </button>
            </form>
        </section>
    )
}

export default Login