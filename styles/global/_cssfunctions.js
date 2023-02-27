
 
function circumference(r){
    return 2 * 3.141592653 * r;
}

function hexToRgba (hex, aplha = 1) {

    if (hex.charAt(0) !== '#') return hex;

        hex = hex.substr(1);
    
    if ((hex.length < 2) || (hex.length > 6)) {
        return hex;
    }
    const values = hex.split('');
    let r;
    let g;
    let b;

    if (hex.length === 2) {
        r = parseInt(values[0].toString() + values[1].toString(), 16);
        g = r;
        b = r;
    } else if (hex.length === 3) {
        r = parseInt(values[0].toString() + values[0].toString(), 16);
        g = parseInt(values[1].toString() + values[1].toString(), 16);
        b = parseInt(values[2].toString() + values[2].toString(), 16);
    } else if (hex.length === 6) {
        r = parseInt(values[0].toString() + values[1].toString(), 16);
        g = parseInt(values[2].toString() + values[3].toString(), 16);
        b = parseInt(values[4].toString() + values[5].toString(), 16);
    } else {
        return hex;
    }
    return `rgba(${r},${g},${b},${aplha})`;
}

module.exports = {
    circumference,
    hexToRgba,
}