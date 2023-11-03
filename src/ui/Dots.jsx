const Dots = ({count, onDotClick, itemsList, current}) => {
    const dots = [];

    for (let i = 0; i < count; i++) {
        let addClass = 'h-4 w-4 rounded-full bg-[#fff] opacity-[0.174363] block hover:opacity-50';

        const dot = <span 
                        key={i} 
                        onClick={() => onDotClick(itemsList[i])}
                        className={current === itemsList[i] ? `${addClass} active` : addClass}></span>
        dots.push(dot);
    }

    return (
        <>
            {dots}
        </>
    );
}

export default Dots;