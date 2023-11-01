const BodyText = ({text, addClass}) => {
    const classes = 'text-h18 mobile:text-[15px] font-barl text-purple leading-2';
    return (
        <div className={`${classes} ${addClass}`}>
            {text}
        </div>
    )
}

export default BodyText;