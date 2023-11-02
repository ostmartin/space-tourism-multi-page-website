const Dots = ({activeDot, count}) => {
    const dots = [];

    for (let i = 0; i < count; i++) {
        let addClass = '';
        if (i + 1 === activeDot) {
            addClass = 'active';
        }

        const dot = <span key={i} className={`${addClass} h-4 w-4 rounded-full bg-[#fff] opacity-[0.174363] block hover:opacity-50`}></span>
        dots.push(dot);
    }

    return (
        <>
            {dots}
        </>
    );
}

export default Dots;