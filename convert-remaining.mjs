import sharp from 'sharp';
const dir = './assets/projects/';
const pairs = [
  ['com-devra-arch-1.jpg','com-devra-arch-1.webp'],
  ['com-devra-arch-2.jpg','com-devra-arch-2.webp'],
  ['com-devra-arch-3.jpg','com-devra-arch-3.webp'],
  ['com-devra-arch-4.jpg','com-devra-arch-4.webp'],
  ['com-devra-arch-5.jpg','com-devra-arch-5.webp'],
  ['com-devra-arch-6.jpg','com-devra-arch-6.webp'],
  ['com-devra-arch-8.jpg','com-devra-arch-8.webp'],
  ['com-devra-arch-9.jpg','com-devra-arch-9.webp'],
  ['res-minzs.jpg','res-minzs.webp'],
  ['res-minzs-2.jpg','res-minzs-2.webp'],
  ['res-minzs-3.jpg','res-minzs-3.webp'],
  ['res-minzs-4.jpg','res-minzs-4.webp'],
  ['res-minzs-5.jpg','res-minzs-5.webp'],
  ['res-minzs-6.jpg','res-minzs-6.webp'],
  ['res-minzs-7.jpg','res-minzs-7.webp'],
  ['res-minzs-8.jpg','res-minzs-8.webp'],
  ['res-minzs-9.jpg','res-minzs-9.webp'],
  ['res-villa-201d.jpg','res-villa-201d.webp'],
  ['res-villa-201d-2.jpg','res-villa-201d-2.webp'],
  ['res-villa-201d-3.jpg','res-villa-201d-3.webp'],
  ['res-villa-201d-8.jpg','res-villa-201d-8.webp'],
  ['res-villa-201d-9.jpg','res-villa-201d-9.webp'],
  ['res-villa-58.jpg','res-villa-58.webp'],
  ['res-villa-58-5.jpg','res-villa-58-5.webp'],
];
for (const [src, dst] of pairs) {
  try {
    await sharp(dir+src).webp({quality:82}).toFile(dir+dst);
    console.log('✓', dst);
  } catch(e) { console.log('ERR', src, e.message); }
}
console.log('done');
