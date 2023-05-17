import PropTypes from 'prop-types'

function Card(props) {
    return <div
        style= {{
            width: 200,
            height: 200,
            margin: 20,
            boxShadow: '2px 2px 5px 0px rgba(0, 0, 0, 0.5)'
        }}
    >
        <img 
        src={props.imageUrl} 
        alt={'Photo of' + props.title}
        style= {{
            width: 200,
            height: 100,
        }}
        />
        <p 
        style= {{
            fontSize: 25
        }}
        >{props.title}</p>
        <p>{props.subtitle}</p>
    </div>
}

Card.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default Card