import HeaderBg from '../../assets/HeaderBg.jpg';
import styles from './Header.module.scss';

export const Header = () => {
    return (
        <header className={styles.Header}>
            <figure>
                <img src={HeaderBg} alt="Header background" />
            </figure>
            <figcaption className={styles.figc}>
                <h1>Under the moon</h1>
                <h3>Hairstyles og Frisør</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis accusamus id saepe quae eaque, repellendus molestiae beatae consectetur ducimus consequatur velit earum eius? Inventore hic harum ex nesciunt voluptatum unde.</p>
            </figcaption>
        </header>
    )
}