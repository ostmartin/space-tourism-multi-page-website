import { NavLink } from 'react-router-dom';

const Tab = ({text, addClass = '', isNavTab = false, index, onTabClick}) => {
    const classes = `flex gap-2 py-9 px-5 text-h16 tracking-2.7 font-barl text-light uppercase cursor-pointer relative afterTab ${addClass}`;

    if (isNavTab) {
        return (
            <li onClick={onTabClick}
            >
                <NavLink to={`/${text}`} className={({isActive, isPending}) => isActive ? (classes + ' active') : classes}>
                    <span className="font-bold hidden mobile:block desktop:block">{'0' + index}</span>
                    {text || 'Home'}
                </NavLink>
            </li>
        )
    }

    return (
        <li
            onClick={() => onTabClick(text)}
            className={`font-barl text-h16 text-purple tracking-2.7 uppercase pb-3 cursor-pointer relative afterTab  ${addClass}`}>
            {text}
        </li>
    )
}

export default Tab;