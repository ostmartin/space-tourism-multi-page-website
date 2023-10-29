const SubHeading = ({text, level}) => {
    const classes = 'customize_subheading text-light uppercase';
    let addClass = '';

    switch (level) {
        case '1': {
            addClass = 'text-h28 font-bell';
            return;
        }
        case '2': {
            addClass = 'text-h14 tracking-2.35 font-barl';
            return;
        }
    }

    return (
        <div className={`${classes} + ${addClass}`}>
            {text}
        </div>
    )
}

export default SubHeading;