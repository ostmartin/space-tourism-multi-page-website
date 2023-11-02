const ExploreButton = ({addClass = '', onClick}) => {
    const classes = `${addClass} font-bell uppercase text-dark bg-light rounded-full text-h32 w-[274px] h-[274px] mobile:text-xl mobile:h-[150px] mobile:w-[150px] desktop:hover:shadow-[0px_0px_0px_75px_rgba(255,255,255,0.1036)] transition-shadow`;

    const onButtonClicked = onClick || (() => console.log('click'));

    return (
        <button className={classes} onClick={() => onButtonClicked()}>
            Explore
        </button>
    )
}

export default ExploreButton;