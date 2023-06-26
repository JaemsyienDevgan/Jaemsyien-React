import { Link } from 'react-router-dom';
import styles from './Routers/App.module.css';
import Button from './components/Button';

function App() {
  return (
    <>
      <nav
        style={{
          display: 'flex',
          backgroundColor: 'pink',
          justifyContent: 'space-between',
        }}
      >
        <Link to="#" className={styles.link}>
          Kenangan Senja
        </Link>

        <div className="">
          <Link to="/Menu" className={styles.link}>
            Menu
          </Link>
          <Link to="/AboutUs" className={styles.link}>
            About Us
          </Link>
          <Link to="/Order" className={styles.link}>
            Order
          </Link>
        </div>
      </nav>
      <h1 className="text-2xl hover:font-bold hover:pointer">Praktikum A2 Pagi</h1>
      <Button className="bg-blue-400 text-white  hover:bg-blue-500">Button 1</Button>
      <Button className="bg-blue-400 text-white  hover:bg-blue-500">Button 2</Button>
    </>
  );
}

export default App