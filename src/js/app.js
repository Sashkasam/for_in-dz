export const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};


 export function orderByProps(obj, [first, second]) {
    const orederedProps = [];
    const remainingProps = [];
    
    for (const element in obj) {
        if(element===first || element === second){
            orederedProps.push({key:element, value: obj[element]});
        }else {
            remainingProps.push({key:element, value: obj[element]});  
        }

    }
    const remainingPropsSort = remainingProps.sort((a, b) => a.key.localeCompare(b.key));
    const newOrderedProps = orederedProps.concat(remainingPropsSort);
    return newOrderedProps;
    
}

