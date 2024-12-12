import styles from './Nav.module.scss';
import { Link } from 'react-router-dom';

export const Nav = () => {
    return (
        <nav className={styles.Nav}>
            <ul className={styles.navItems}>
                <li><Link to='/'>Hjem</Link></li>
                <li><Link to='Koncepter'>Koncepter</Link></li>
                <li><Link to='UTMLoyalty'>UTM Loyalty</Link></li>
                <li><Link to='Om'>Om</Link></li>
                <li><Link to='Kontakt'>Kontakt</Link></li>
            </ul>
        </nav>
    );
};
