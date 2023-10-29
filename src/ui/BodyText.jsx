const BodyText = ({text, addClass}) => {
    const classes = 'customize_bodyText text-h18 font-barl text-purple leading-2';
    return (
        <div className={`${classes} ${addClass}`}>
            {text}
        </div>
    )
}

export default BodyText;