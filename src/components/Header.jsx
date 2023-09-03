import Navigation from './Navigation';
const styles = {
    headerStyle: {
        backgroundColor:'var(--primary)',
        margin:'0 auto',
        marginBottom: '50px',

    },
    linkStyle: {
        backgroundColor: 'red'
    }

};

export default function Header() {
    return (<>
        <header style={styles.headerStyle}>
            <h1 className='textAnimation' >Portfolio</h1>
            <Navigation/>
        </header>
    </>);
}
