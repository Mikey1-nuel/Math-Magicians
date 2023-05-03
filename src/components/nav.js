import '../App.css';

const Nav = () => (
    <nav className='nav'>
      <h1>Math Magician</h1>
      <ul className='menu'>
        <li><a href='/'>Home</a></li>
        <li><a href='/calculator'>Calculator</a></li>
        <li><a href='/quotes'>Quotes</a></li>
      </ul>
    </nav>
);

export default Nav;