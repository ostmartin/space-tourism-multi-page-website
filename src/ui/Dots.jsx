import { NavLink } from "react-router-dom";
import { toLowerCaseFirstLetter } from "../service";

const Dots = ({count, itemsList}) => {
    const dots = [];

    for (let i = 0; i < count; i++) {
        let addClass = 'h-4 w-4 rounded-full bg-[#fff] opacity-[0.174363] block hover:opacity-50';
        const member = itemsList[i].split(' ').map(word => toLowerCaseFirstLetter(word)).join('-');
        
        const dot = <NavLink 
                        key={i}
                        to={`/crew/${member}`}
                        className={({isActive}) => isActive ? addClass + ' active' : addClass}></NavLink>
        dots.push(dot);
    }

    return (
        <>
            {dots}
        </>
    );
}

export default Dots;