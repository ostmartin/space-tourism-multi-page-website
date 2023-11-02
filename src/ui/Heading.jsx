const Heading = ({text, level, addClass = ''}) => {
    const classes = 'text-light uppercase';
    let extraClass = '';

    switch (level) {
        case '1': {
            extraClass = 'text-h150 font-bell mobile:text-[80px]';
            break;
        }
        case '2': {
            extraClass = 'text-h100 font-bell tablet:text-[80px] mobile:text-[56px]';
            break;
        }
        case '3': {
            extraClass = 'desktop:text-h56 font-bell tablet:text-[40px] mobile:text-[24px]';
            break;
        }
        case '4': {
            extraClass = 'text-h32 font-bell tablet:text-[24px] mobile:text-h16';
            break;
        }
        case '5': {
            extraClass = 'text-h28 tablet:text-[20px] mobile:text-h16 tracking-4.725 text-purple font-barl';
            break;
        }
        default: {
            break;
        }
    }

    return (
        <div className={`${classes} ${extraClass} ${addClass}`}>
            {text}
        </div>
    )
}

export default Heading;