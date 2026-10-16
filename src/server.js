const express = require('express');
const app = express();
const PORT = 3000;
const termekek = [
{ id: 1, nev: 'Sajtos szendvics', kategoria: 'Étel', ar: 650, keszlet: 12 },
{ id: 2, nev: 'Sonkás szendvics', kategoria: 'Étel', ar: 720, keszlet: 8 },
{ id: 3, nev: 'Ásványvíz', kategoria: 'Ital', ar: 300, keszlet: 25 },
{ id: 4, nev: 'Almalé', kategoria: 'Ital', ar: 450, keszlet: 15 },
{ id: 5, nev: 'Müzliszelet', kategoria: 'Nassolnivaló', ar: 380, keszlet: 18 },
{ id: 6, nev: 'Perec', kategoria: 'Nassolnivaló', ar: 250, keszlet: 20 }
];
app.get('/api/termekek', (req, res) => res.json(termekek));
app.get('/api/termekek/darab', (req, res) => {
res.json({ darab: termekek.length });
});
app.get('/api/termekek/ossz-keszlet', (req, res) => {
const osszeg = termekek.reduce((sum, termek) => sum + termek.keszlet, 0);
res.json({ osszKeszlet: osszeg });
});
app.listen(PORT, () => {
console.log(`A szerver fut: http://localhost:${PORT}`);
});