import { Route, Routes } from 'react-router-dom';
import Cadastro from './page/Cadastro';
import SignIn from './page/SignIn';

function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/cadastro' element={<Cadastro />} />

        </Routes>
    )

}

export default MainRoutes;