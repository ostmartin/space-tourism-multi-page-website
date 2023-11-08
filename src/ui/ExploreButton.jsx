import { Link } from "react-router-dom";

const ExploreButton = ({addClass = '', onButtonClick}) => {
    const classes = `${addClass} flex justify-center items-center block font-bell uppercase text-dark bg-light rounded-full text-h32 w-[274px] h-[274px] mobile:text-xl mobile:h-[150px] mobile:w-[150px] desktop:hover:shadow-[0px_0px_0px_75px_rgba(255,255,255,0.1036)] transition-shadow`;

    return (
        <Link to={'/destination/moon'} className={classes} onClick={onButtonClick}>
            Explore
        </Link>
    )
}

export default ExploreButton;