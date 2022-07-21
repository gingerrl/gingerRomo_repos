
export const colorStatus = (max) => {

    var simbolos, color;
    simbolos= "0123456789ABCDEF";
    color= "#"

    for(var i = 0; i < 6; i++){
		color = color + simbolos[Math.floor(Math.random() * 16)];
	}

    return color;
}

export const getUrl = url => {
    let strs = url.split('/');
    let id = strs.at(-2)
    return id;
}