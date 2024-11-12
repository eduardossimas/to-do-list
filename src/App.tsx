import logoToDoList from './assets/Logo.svg'
import { CurrentTasks } from './components/CurrentTasks.tsx'
import './index.css';

export function App() {
    return (
        <div className=''>
            <div className='h-screen z-0'>
                <div className='h-1/6 bg-gray-950'>
                    <div className='flex items-center justify-center h-full'>
                        <img src={logoToDoList} alt="Logo aplicativo" />
                    </div>
                </div>
                <div className='h-5/6 bg-gray-900'></div>
            </div>
            <CurrentTasks></CurrentTasks>
        </div>
    )
}