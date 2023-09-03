import '../colors.css'
const styles = {
    divStyle:{
        backgroundColor:'var(--primary)',
    },
    };

export default function Navigation() {
    return (<>
        <div style={styles.divStyle}>
            <button><a href="/">Home</a></button>
            <button><a href="/about">About</a></button>
            <button><a href="/contact">Contact</a></button>
        </div>

    </>);
}
