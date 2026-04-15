import { useState, useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { useNavigate } from "react-router-dom";
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

function Login(){
    const { handleLogin } = useContext(UserContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    return (
        <Container>
            <Card>

                <Left>
                    <Logo src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" />
                    <Title>Faça login</Title>
                    <Subtitle 
                        onClick={() => navigate('/')}
                        style={{
                        cursor: 'pointer',
                        color: '#1a73e8',
                        fontWeight: '500'
                        }}
                        >Prosseguir no YouTube
                        </Subtitle>
                </Left>

                <Right>

                   
                    <InputGroup>
                        <Input 
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Label $active={!!email}>E-mail</Label>

                    </InputGroup>

                    
                    <InputGroup>
                        <Input 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Label $active={!!password}>Senha</Label>
                    </InputGroup>
                    {error && <span style={{ color: 'red' }}>{error}</span>}

                    <Footer>
                        <CreateAccount onClick={() => navigate('/register')}>
                        Criar conta
                        </CreateAccount>

                        <Button onClick={async () => {
                            setError('');

                            const success = await handleLogin(email, password);

                             if (success) {
                                navigate('/');
                             } else {
                                setError('Email ou senha inválidos');
                            }
                        }}>
                                  Entrar
                            </Button>
                    </Footer>

                </Right>

            </Card>
        </Container>
    )
}

export default Login;