const data = ['Danawi Liam', 'Tarjaya', 'Daruna', 'Warsoni', 'John Wick', 'Hadi PS', 'Derian Lekso']

function search(name) {
    return data.filter((item) => item.toLowerCase().includes(name.toLowerCase()))
}

console.log(search('liam'))
console.log(search('hadi'))
console.log(search('w'))
console.log(search('Danawi LiAM'))