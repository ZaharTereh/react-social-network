export const updateObjectInArray = (items, objectPropName, itemId, newProps) => {
    return items.map(el => {
        if (el[objectPropName] === itemId) {
            return {...el, ...newProps}
        }
        return el;
    })
}