import CardFeature from "./Card-feature";
import "./Feature.css"
function Feature() {
    return(
        <section id="feature">
            <h2>Razones por las que disfrutaras quedarte con nosotros</h2>
            <div className="feature-row">
                <CardFeature
                //Propiedades
                texto='Reservas'
                fondo={true}
                icono='fa-solid fa-bell-concierge'
                />
                <CardFeature
                texto='Habitaciones' fondo={false}
                icono='fa-solid fa-bed'/>
                <CardFeature texto='Wifi'
                fondo={true}   icono='fa-solid fa-wifi'
                />
                <CardFeature texto='Gimnasio'  fondo={false}
                icono='fa-solid fa-dumbbell'/>
            </div>

        </section>
    );
}

export default Feature;