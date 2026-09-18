import Styles from './NavBar.module.css' ;

const NavBar = () => {
    return (
        <>
        <div className={Styles['navbar']}>
            <nav>
                <div className={Styles['home-logo']}>
                    <a href="#">flashcards</a>
                </div>
                
            </nav>
        </div>
        </>
    );
}

export default NavBar;