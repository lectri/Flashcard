const Button = ({label, image, imageAlt, onClick} : {label?: string, image?: string, imageAlt?: string, onClick: () => void}) => {

    if (image !== undefined) {
        return (
            <button onClick={onClick}><img src={image} alt={imageAlt}/></button>
        );
    }

    
    return (
        <>
        <button onClick={onClick}>{label}</button>
        </>
    );
}

export default Button;