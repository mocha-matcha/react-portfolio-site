import { Link } from 'react-router-dom';
const styles = {
    divStyle:{
        padding:'2vw',
        backgroundColor:'var(--primary)',
    },
    };

export default function Navigation() {
    return (<>
        <div style={styles.divStyle}>
        <Link key={1} to='/'><button>Home</button></Link>
        <Link key={1} to='/projects'><button>Projects</button></Link>
        <Link key={2} to='/about'><button>About</button></Link>
            <Link key={3} to='/contact'><button>Contact</button></Link>
        </div>

    </>);
}
