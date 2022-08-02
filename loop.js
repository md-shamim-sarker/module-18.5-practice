// let str = 'Today, I am not well.';
// let i = 1;
// while (i <= 39) {
//     console.log('(' + i + ') ' + str);
//     i++;
// }

// for (; i <= 39; i++) {
//     console.log('(' + i + ') ' + str);
// }

// do {
//     console.log('(' + i + ') ' + str);
//     i++;
// } while (i <= 39);

// for (let i = 58; i <= 98; i++) {
//     console.log(i);
//     i++;
// }

// let i = 412;

// while (i <= 456) {
//     console.log(i);
//     i += 2;
// }

// let i = 581;

// do {
//     console.log(i);
//     i += 2;
// } while (i <= 623);

// const arr = ['HTML', 'CSS', 'Bootstrap', 'Tailwind', 'JS'];

// let i = 0;
// for (; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// const arr = ['Citycell', 'Motorola', 'Symphony', 'Nokia', 'Xiomi'];

// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }

// for (let i = 30; i <= 86; i++) {
//     if (i > 44) {
//         break;
//     }
//     console.log(i);
// }

const arr = [150, 180, 220, 230, 160, 300, 190, 204];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 200) {
        continue;
    }
    console.log(arr[i]);
}