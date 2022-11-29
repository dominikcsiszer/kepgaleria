import './Kep.css';

function Kep(props) {
    function kattintas() {
        console.log(props.kepAdat.id)
        props.kattintasKepre(props.kepAdat.id)
    }

    return (
        <div className="kep" onClick={kattintas}>
            <img className='kep-img' src={props.kepAdat.kep} alt='Kép'></img>
            <h3>Cím: {props.kepAdat.cim}</h3>
            <p>{props.kepAdat.leiras}</p>
        </div>
    );
}

export default Kep;
