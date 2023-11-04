const Tab = ({text, addClass = '', isNavTab = false, index, onTabClick}) => {
    if (isNavTab) {
        return (
            <li className={`flex gap-2 align-text-top py-9 px-5 text-h16 tracking-2.7 font-barl text-light uppercase cursor-pointer relative afterTab ${addClass}`}
                onClick={onTabClick}
            >
                <span className="font-bold hidden mobile:block desktop:block">{'0' + index}</span>
                {text}
            </li>
        )
    }

    return (
        <li
            onClick={onTabClick}
            className={`font-barl text-h16 text-purple tracking-2.7 uppercase align-text-top pb-3 cursor-pointer relative afterTab  ${addClass}`}>
            {text}
        </li>
    )
}

export default Tab;