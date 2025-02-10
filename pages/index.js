import "./App.css";
import Link from 'next/link';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold">Hoş Geldiniz!</h1>
            <nav className="mt-6">
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/page" className="text-blue-500 hover:underline">Giriş Yap</Link>
                    </li>
                    
                </ul>
            </nav>
        </div>
    );
};

export default Home;