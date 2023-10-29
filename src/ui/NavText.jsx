const NavText = ({text, level}) => {
    const classes = 'customize_heading font-bell text-light uppercase';
    let addClass = '';

    switch (level) {
        case '1': {
            addClass = 'text-h150 mobile:text-[80px]';
            return;
        }
        case '2': {
            addClass = 'text-h100 tablet:text-[80px] mobile:text-[56px]';
            return;
        }
        case '3': {
            addClass = 'text-h56 tablet:text-[40px] mobile:text-[24px]';
            return;
        }
        case '4': {
            addClass = 'text-h-32 tablet:text-[24px] mobile:text-h16';
            return;
        }
        case '5': {
            addClass = 'text-h28 tablet:text-[20px] mobile:text-h16 tracking-4.725 text-purple font-barl';
            return;
        }
    }

    return (
        <div className={`${classes} + ${addClass}`}>
            {text}
        </div>
    )
}

export default NavText;