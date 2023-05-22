import PropTypes from 'prop-types';

function Avatar(props) {
    function getInitials(name) {
        let rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');
        let initials = [...name.matchAll(rgx)] || [];
        return initials = ((initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')).toUpperCase();
    }

    function getRandomColor() {
        return "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
    }

    return <div
    style= {{
        width: 40,
        height: 40,
        margin: 10,
        borderRadius: 50,
        color: 'white',
        backgroundColor: getRandomColor(),
        textAlign: 'center',
        fontSize: 26
        
    }}
    >
        <p>{getInitials(props.name)}</p>
    </div>
}

Avatar.propTypes = {
    name: PropTypes.string
}

export default Avatar