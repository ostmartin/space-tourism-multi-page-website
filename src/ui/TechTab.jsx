const TechTab = ({text, addClass = '', onTabClick}) => {
    return (
        <span
            onClick={onTabClick}
            className={`${addClass} heading-4 h-[40px] w-[40px] rounded-full bg-opacity-0 border-light/25 border-solid border-[1px] flex justify-center items-center tablet:w-[60px] tablet:h-[60px] desktop:w-[80px] desktop:h-[80px] hover:border-light/100`}>
            {text}
        </span>
    )
}

export default TechTab;