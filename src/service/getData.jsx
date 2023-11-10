import DATA from './../data.json';

const getData = async (item, segment) => {
    const currentItem = DATA[segment].find(entry => entry.name === item);
    return await currentItem;
}

export default getData;