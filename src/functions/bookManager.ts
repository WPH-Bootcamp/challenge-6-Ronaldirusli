// Tugas 3: Implementasikan fungsi-fungsi manajemen buku

import { books } from '../data/books';
import { Book } from '../types/index';

// Fungsi addBook
// Fungsi ini digunakan untuk menambahkan buku baru ke dalam koleksi
// Parameter yang dibutuhkan: data buku sesuai tipe Book
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan bagaimana cara menambahkan buku ke array yang sudah disediakan

// Fungsi listBooks
// Fungsi ini digunakan untuk menampilkan semua buku yang tersimpan
// Tidak memerlukan parameter
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan cara menampilkan data buku dengan format yang mudah dibaca

// Fungsi searchBook
// Fungsi ini digunakan untuk mencari buku berdasarkan judul
// Parameter title bersifat opsional (bisa ada atau tidak)
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: jika parameter title diberikan, cari buku yang cocok
//           jika tidak diberikan, tampilkan semua buku atau berikan informasi yang sesuai

export const addBook = (book: Book): void => {
  books.push(book);
  console.log(`Buku "${book.title}" berhasil ditambahkan.`);
};
export const listBooks = (): void => {
  if (books.length === 0) {
    console.log('Belum ada buku yang tersedia.');
    return;
  }
  console.log('Daftar Buku:');
  books.forEach((book) => {
    console.log(
      `- ${book.title} oleh ${book.author} (${book.publicationYear}) - ${book.isAvailable ? 'Tersedia' : 'Tidak Tersedia'}`
    );
  });
};
export const searchBookbyId = (id: number): Book | undefined => {
  return books.find((book) => book.id === id);
};
export const updateBookAvailability = (
  id: number,
  isAvailable: boolean
): void => {
  const book = searchBookbyId(id);
  if (book) {
    book.isAvailable = isAvailable;
    console.log(
      `Status ketersediaan buku "${book.title}" berhasil diperbarui.`
    );
  } else {
    console.log(`Buku dengan ID ${id} tidak ditemukan.`);
  }
};
