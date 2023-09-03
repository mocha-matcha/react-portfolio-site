import '../colors.css'
import { Link } from 'react-router-dom';
const styles = {
    divStyle:{
        backgroundColor:'var(--primary)',
    },
    };

export default function Navigation() {
    return (<>
        <div style={styles.divStyle}>
        <button><Link key={1} to='/'>Home</Link></button>
        <button><Link key={2} to='/about'>About</Link></button>
            <button><Link key={3} to='/contact'>Contact</Link></button>
        </div>

    </>);
}
