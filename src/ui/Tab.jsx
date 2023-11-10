import { NavLink } from 'react-router-dom';

const Tab = ({text, addClass = '', onTabClick}) => {
    return (
        <li
            onClick={onTabClick}
            className={`font-barl text-h16 text-purple tracking-2.7 uppercase pb-3 cursor-pointer relative afterTab  ${addClass}`}>
            {text}
        </li>
    )
}

export default Tab;