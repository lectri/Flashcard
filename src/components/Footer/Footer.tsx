import reactLogo from '../../assets/react.svg';
import Styles from './footer.module.css';

const Footer = () => {
    return (
        <>
        <div className={Styles['site-footer']}>
            <footer>
                <p>Made with React {'\u00A0'}</p>
                <img src={reactLogo} alt="React logo"></img>
            </footer>
        </div>
        </>
    );
}

export default Footer;