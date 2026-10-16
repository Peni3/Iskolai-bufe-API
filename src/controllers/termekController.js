const termekek = [
    { id: 1, nev: 'Sajtos szendvics', kategoria: 'Étel', ar: 650, keszlet: 12 },
    { id: 2, nev: 'Sonkás szendvics', kategoria: 'Étel', ar: 720, keszlet: 8 },
    { id: 3, nev: 'Ásványvíz', kategoria: 'Ital', ar: 300, keszlet: 25 },
    { id: 4, nev: 'Almalé', kategoria: 'Ital', ar: 450, keszlet: 15 },
    { id: 5, nev: 'Müzliszelet', kategoria: 'Nassolnivaló', ar: 380, keszlet: 18 },
    { id: 6, nev: 'Perec', kategoria: 'Nassolnivaló', ar: 250, keszlet: 20 }
];

const getAllTermek = (req, res) => {
    res.json(termekek);
};

const getDarab = (req, res) => {
    res.json({ darab: termekek.length });
};

const getOsszKeszlet = (req, res) => {
    const osszeg = termekek.reduce((sum, termek) => sum + termek.keszlet, 0);
    res.json({ osszKeszlet: osszeg });
};

const getKategoriak = (req, res) => {
    const egyediKategoriak = [...new Set(termekek.map(t => t.kategoria))];
    res.json({
        kategoriak: egyediKategoriak,
        darab: egyediKategoriak.length  
    });
};

const getTermekById = (req, res) => {
    const id = Number(req.params.id);
    const termek = termekek.find(t => t.id === id);

    if (!termek) {
        return res.status(404).json({ hiba: "Nincs ilyen termék." });
    }

    res.json(termek);
};

module.exports = {
    getAllTermek,
    getDarab,
    getOsszKeszlet,
    getKategoriak,
    getTermekById
};