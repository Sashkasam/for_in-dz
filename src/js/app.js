export const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
export const arr = ['name', 'level'];


 export function orderByProps(obj, arr) {
    const orederedProps = [];
    const remainingProps = [];
    
    for (const element in obj) {
        if(arr.includes(element)){
            orederedProps.push({key:element, value: obj[element]});
        }else {
            remainingProps.push({key:element, value: obj[element]});  
        }

    }
    const remainingPropsSort = remainingProps.sort((a, b) => a.key.localeCompare(b.key));
    const newOrderedProps = orederedProps.concat(remainingPropsSort);
    return newOrderedProps;
    
}

