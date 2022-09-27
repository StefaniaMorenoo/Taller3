import "./Card-feature.css"

function CardFeature({texto,fondo,icono}) {
    return(
        <article className={fondo?"feature-box box-blue":"feature-box box-dark"}>
            <i className={icono}></i>
            <h3>{texto}</h3>
        </article>
    );
}

export default CardFeature;