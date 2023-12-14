let currentList = ["Nady", "Sira", "Arsio", "Joa"]
console.log(currentList.length);
let newUsers = ["Margo", "Lael"]

let data = currentList.push({ ...newUsers, id: currentList.length + 1 });

console.log("Data :: ", data);