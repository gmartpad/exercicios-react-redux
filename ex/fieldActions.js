export function changeValue(e){
    console.log('changeValue2')

    return {
        type: 'VALUE_CHANGED',
        payload: e.target.value
    }
}