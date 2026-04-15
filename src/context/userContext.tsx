import { createContext, useEffect, useState } from 'react';
import api from '../api';

export const UserContext = createContext({} as any);

export const UserStorage = ({ children }: any) => {
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState<any>(null);
    const [token, setToken] = useState(localStorage.getItem('token') as string);

const getUser = (token: string) => {
    api.get('/user/get-user', {
        headers: { Authorization: token }
    })
    .then(({ data }) => {

        console.log("RESPOSTA DO BACK:", data); // 🔥 AQUI

        setUser(data.user);
        setLogin(true);
    })
    .catch((error) => {

        console.log("ERRO AO BUSCAR USER:", error); // 🔥 EXTRA

        setLogin(false);
    });
}

    useEffect(() => {
    if (token) {
        getUser(token);
    }
    }, [token]);

const logOut = () => {
    localStorage.removeItem('token');
    setLogin(false);
    setUser({});
    window.location.href = '/login';
    
}

    const handleLogin = async (email: string, password: string) => {
    try {
        const { data } = await api.post('/user/sign-in', { email, password });

        localStorage.setItem('token', data.token);

        setToken(data.token);
        setLogin(true);

        getUser(data.token);

        return true;
    } catch (error) {
        return false;
    }
}

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