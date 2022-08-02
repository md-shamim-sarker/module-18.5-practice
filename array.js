// const arr1 = new Array('Shamim', 'Snigdha', 'Sneha');
const arr2 = ['Shamim', 'Snigdha', 'Sneha'];

console.log(arr2.length);
console.log(arr2[1]);

arr2[0] = 'Swapon';

console.log(arr2);

console.log(arr2.indexOf('Sneha'));

console.log(arr2[3]);

arr2.push('Mony');

console.log(arr2);

arr2.pop();

console.log(arr2);

arr2.unshift('Shamim');

console.log(arr2);

arr2.shift();

console.log(arr2);

arr2.splice(1, 0, 'Sarmin');

console.log(arr2);
