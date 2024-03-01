
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import LogoutComponent from './LogoutComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import ListTodosComponent from './ListTodosComponent'
import WelcomeComponent from './WelcomeComponent'
import ErrorComponent from './ErrorComponent'
import LoginComponent from './LoginComponent'
import './TodoApp.css'
export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route path='/' element={<LoginComponent />}></Route>
                    <Route path='/login' element={<LoginComponent />}></Route>
                    <Route path='/welcome/:username' element={<WelcomeComponent />}></Route>
                    <Route path='/todos' element={<ListTodosComponent />}></Route>
                    <Route path='/logout' element={<LogoutComponent />}></Route>
                    <Route path='*' element={<ErrorComponent />}></Route>
                </Routes>
                <FooterComponent />
            </BrowserRouter>
            <FooterComponent />
        </div>
    )

}















