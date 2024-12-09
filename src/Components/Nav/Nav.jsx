import styles from './Nav.module.scss';

export const Nav = () => {
    return (
        <nav className={styles.Nav}>
            <ul className={styles.navItems}>
                <li><a href="#">Hjem</a></li>
                <li><a href="#">Koncepter</a></li>
                <li><a href="#">UTM Loyalty</a></li>
                <li><a href="#">Om</a></li>
                <li><a href="#">Kontakt</a></li>
            </ul>
        </nav>
    );
};
