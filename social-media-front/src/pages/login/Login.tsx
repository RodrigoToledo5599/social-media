
import {
    Container,
    LoginBox,
    InputField,
    SendingButton,
} from './Login.styles';

export default function Login(){



    
    return (
        <div>
            <Container>
                <form action="/api/login" method='POST'>
                <LoginBox>
                    <h1>Login</h1>
                        <InputField type="text" name="email"></InputField>
                        <InputField type="password" name="password"></InputField>
                        <SendingButton type="submit" className="btn btn-primary">
                            Login
                        </SendingButton>
                </LoginBox>
                </form>
            </Container>
        </div>
    )
}