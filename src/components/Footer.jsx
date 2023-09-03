const styles = {
    footerStyle: {
        backgroundColor:'var(--primary)',
        margin:'0 auto',
        marginTop: '50px',

    },
    linkStyles:
    {padding:'3px'}



}; 
export default function Footer() {
    return (<>
    <footer style={styles.footerStyle}>
       <h3>Copyright @ Holder All Rights Reserved.</h3>
       <div style={styles.linkStyles}><a href="https://github.com/mocha-matcha"><button>Github</button></a></div>
    </footer>
    </>);
}
