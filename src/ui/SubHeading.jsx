const SubHeading = ({text, level}) => {
    const classes = 'customize_subheading uppercase';
    let addClass = '';

    switch (level) {
        case '1': {
            addClass = 'text-h28 font-bell text-light';
            break;
        }
        case '2': {
            addClass = 'text-h14 tracking-2.35 font-barl text-purple';
            break;
        }
        default: break;
    }

    return (
        <div className={`${classes} ${addClass}`}>
            {text}
        </div>
    )
}

export default SubHeading;