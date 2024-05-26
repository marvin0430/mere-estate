import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className={'bg-slate-200 shadow-md'}>
            <div className={'flex justify-between items-center max-w-6xl mx-auto p-3'}>
                <Link to={'/'}>
                    <h2 className={'font-bold text-sm sm:text-xl flex flex-wrap'}>
                        <span className={'text-slate-500'}>Sahand</span>
                        <span className={'text-slate-700'}>Estate</span>
                    </h2>
                </Link>
                <form className={'flex items-center bg-slate-100 p-3 rounded-lg'}>
                    <input type="text" placeholder={'Search...'}
                           className={'w-24 sm:w-64 focus:outline-none bg-transparent'}/>
                    <FaSearch className={'text-slate-500'}/>
                </form>
                <ul className={'flex gap-4'}>
                    <Link to={'/'}>
                        <li className={'hidden sm:inline text-slate-700 hover:text-slate-900 hover:scale-105 transition ease-in-out'}>Home</li>
                    </Link>
                    <Link to={'/about'}>
                        <li className={'hidden sm:inline text-slate-700 hover:text-slate-900 hover:scale-105 transition ease-in-out'}>About</li>
                    </Link>
                    <Link to={'sign-in'}>
                        <li className={'text-slate-700 hover:scale-105 hover:text-slate-900 transition ease-in-out'}>Sign
                            in
                        </li>
                    </Link>
                </ul>
            </div>

        </header>
    );
}

export default Header;