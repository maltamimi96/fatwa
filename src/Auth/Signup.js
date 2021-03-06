import { useRef } from "react";
import { Form,Button,Card } from "react-bootstrap";
const Signup = () => {
    const usernameRef=useRef()
    const emailRef=useRef()
    const passwordRef=useRef()
    const passwordConfirmRef=useRef()


    return ( 
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    <Form>
                    <Form.Group id="username">
                            <Form.Label>username</Form.Label>
                            <Form.Control type="text" ref={usernameRef}required/>
                        </Form.Group>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef}required/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>password</Form.Label>
                            <Form.Control type="password" ref={passwordRef}required/>
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>confirm password</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef}required/>
                        </Form.Group>
                        <Button className="w-100" type="submit" style={{marginTop:"5px"}}>
                            Sign Up
                        </Button>
                    </Form>
                </Card.Body>
            </Card>


        </>
     );
}
 
export default Signup;