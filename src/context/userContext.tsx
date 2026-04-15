import { createContext, useEffect, useState } from 'react';
import api from '../api';

export const UserContext = createContext({} as any);

export const UserStorage = ({ children }: any) => {
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState<any>(null);
    const [token, setToken] = useState(localStorage.getItem('token') as string);

const getUser = async (token: string) => {
    try {
        const { data } = await api.get('/user/get-user', {
        headers: { Authorization: token }
        });

        console.log("RESPOSTA DO BACK:", data);

        setUser(data.user);
        setLogin(true);

    } catch (error) {
        console.log("ERRO AO BUSCAR USER:", error);
        setLogin(false);
    }
    };

    useEffect(() => {
    if (token) {
        getUser(token);
    }
    }, [token]);

const logOut = () => {
    localStorage.removeItem('token');
    setLogin(false);
    setUser(null);
}

    const handleLogin = async (email: string, password: string) => {
        try {
            const { data } = await api.post('/user/sign-in', { email, password });

            localStorage.setItem('token', data.token);

            setToken(data.token);

            await getUser(data.token); 

            return true;
        } catch (error) {
            return false;
        }
        };

    return (
        <UserContext.Provider value={{
            login,
            user,
            handleLogin,
            logOut
        }}>
            {children}
        </UserContext.Provider>
    )
}