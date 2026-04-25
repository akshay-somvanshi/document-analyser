import logo from '/src/assets/hero.png'

export default function Header() {
    return (
        <header className='mainHeader'>
            <img src={logo} alt="logo" />
            <h1>Document AI</h1>
        </header>
    );
} 