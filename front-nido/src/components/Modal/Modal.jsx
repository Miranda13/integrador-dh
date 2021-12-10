import Portal from './Portal';

export default function ModalScore(props) {
    const { children, toggle, active } = props;
    return (
        <Portal>
            {
                active && (
                    <div style={styles.wrapper}>
                        <div style={styles.window}>
                            <button style={styles.closeBtn} onClick={toggle}>X</button>
                            <div>{children}</div>
                        </div>
                        <div onClick={toggle} style={styles.background} />
                    </div>
                )
            }
        </Portal>
    )
}


const styles = {
    wrapper: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    window: {
        position: "relative",
        background: "#fff",
        borderRadius: 5,
        padding: 40,
        boxShadow: "2px 2px 10px rgba(0,0,0,0.3)",
        zIndex: 10,
        minWidth: 320
    },
    closeBtn: {
        position: "absolute",
        top: 0,
        right: 0,
        width: "15%",
        height: "15%",
        backgroundColor: "unset",
        border: "none",
        color: "var(--main-color)",
        fontWeight: "var(--font-weight-bold)",
        fontSize: "2rem",
        padding: "10px",
        cursor: "pointer",
    },
    background: {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        background: "#000",
        opacity: 0.4,
    }
}