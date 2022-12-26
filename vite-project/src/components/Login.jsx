import React from 'react'
import '../App.css'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/userSlice';

function Login () {

    const [name, setName] = React.useState('')
    const dispatch = useDispatch()

    const handleLogin = () => {
        dispatch(login(name))
    }

    return (
        <div>
            <h1>Login</h1>

            <div className="card">
                <Container>
                    <Row>
                        <Col>
                            <Form.Control type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)}/>
                        </Col>
                        <Col>
                            <button onClick={handleLogin}>
                                Login
                            </button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    )
}
export default Login