import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../context/userContext';
import api from '../../api';
import {
  Container,
  Card,
  Left,
  Right,
  Title,
  Subtitle,
  InputGroup,
  Input,
  Label,
  Button,
  Footer,
  CreateAccount,
  Logo
} from './styles';


function Register(){
    const { handleLogin } = useContext(UserContext);
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async () => {
        try {
            setError('');
            await api.post('/user/sign-up', {
                name,
                email,
                password
            });

            
            const success = await handleLogin(email, password);

            if (success) {
                navigate('/');
            }

        } catch (err: any) {
          const message = err?.response?.data?.error || 'Erro ao criar conta';
            setError(message);
}
    }

    return (
    <Container>
        <Card>

            <Left>
                <Logo src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" />
                <Title>Criar conta</Title>
                <Subtitle>Cadastre-se para continuar</Subtitle>
            </Left>

            <Right>

                <InputGroup>
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder=" "
                    />
                    <Label $active={!!name}>Nome</Label>
                </InputGroup>

                <InputGroup>
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder=" "
                    />
                    <Label $active={!!email}>Email</Label>
                </InputGroup>

                <InputGroup>
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder=" "
                    />
                    <Label $active={!!password}>Senha</Label>
                </InputGroup>

                {error && (
                    <span style={{ color: 'red', fontSize: '14px' }}>
                        {error}
                    </span>
                )}

                <Footer>
                    <CreateAccount onClick={() => navigate('/login')}>
                        Já tem conta?
                    </CreateAccount>

                    <Button onClick={handleRegister}>
                        Cadastrar
                    </Button>
                </Footer>

            </Right>

        </Card>
    </Container>
)
}

export default Register;