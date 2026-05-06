"use strict";
// Tugas 2: Buat array untuk menyimpan koleksi buku
// Array ini akan digunakan sebagai penyimpanan data sementara selama aplikasi berjalan
// Pertimbangkan tipe data yang tepat untuk array ini berdasarkan definisi Book yang sudah dibuat
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBookAvailability = exports.searchBookbyId = exports.listBooks = exports.addBook = exports.books = void 0;
exports.books = [];
const addBook = (book) => {
    exports.books.push(book);
    console.log(`Buku "${book.title}" berhasil ditambahkan.`);
};
exports.addBook = addBook;
const listBooks = () => {
    if (exports.books.length === 0) {
        console.log('Belum ada buku yang tersedia.');
        return;
    }
    console.log('Daftar Buku:');
    exports.books.forEach((book) => {
        console.log(`- ${book.title} oleh ${book.author} (${book.publicationYear}) - ${book.isAvailable ? 'Tersedia' : 'Tidak Tersedia'}`);
    });
};
exports.listBooks = listBooks;
const searchBookbyId = (id) => {
    return exports.books.find((book) => book.id === id);
};
exports.searchBookbyId = searchBookbyId;
const updateBookAvailability = (id, isAvailable) => {
    const book = (0, exports.searchBookbyId)(id);
    if (book) {
        book.isAvailable = isAvailable;
        console.log(`Status ketersediaan buku "${book.title}" berhasil diperbarui.`);
    }
    else {
        console.log(`Buku dengan ID ${id} tidak ditemukan.`);
    }
};
exports.updateBookAvailability = updateBookAvailability;
