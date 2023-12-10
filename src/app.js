export default function orderByProps(obj, order) {
    const one = [];
    const list = []
    for (let i = 0; i < order.length; i++) {
        let key = order[i];
        if (obj.hasOwnProperty(key)) {
            list.push({key: key, value: obj[key]});
        };
    };
    

    for (let prop in obj) {
        if (!order.includes(prop)) {
            one.push({ key: prop, value: obj[prop] });
        }
    }
    one.sort((a, b) => a.key.localeCompare(b.key))
    
    const result = [...list, ...one]
    return result
}
