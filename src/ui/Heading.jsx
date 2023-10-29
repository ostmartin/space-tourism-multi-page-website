const Heading = ({text, level}) => {
    const classes = 'customize_heading text-light uppercase';
    let addClass = '';

    switch (level) {
        case '1': {
            addClass = 'text-h150 font-bell mobile:text-[80px]';
            break;
        }
        case '2': {
            addClass = 'text-h100 font-bell tablet:text-[80px] mobile:text-[56px]';
            break;
        }
        case '3': {
            addClass = 'text-h56 font-bell tablet:text-[40px] mobile:text-[24px]';
            break;
        }
        case '4': {
            addClass = 'text-h-32 font-bell tablet:text-[24px] mobile:text-h16';
            break;
        }
        case '5': {
            addClass = 'text-h28 tablet:text-[20px] mobile:text-h16 tracking-4.725 text-purple font-barl';
            break;
        }
        default: {
            break;
        }
    }

    return (
        <div className={`${classes} + ${addClass}`}>
            {text}
        </div>
    )
}

export default Heading;