// Configuration de Multer pour gérer les fichiers téléchargés
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Dossier où les fichiers téléchargés seront stockés
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Nom du fichier sauvegardé
  }
});
const upload = multer({ storage: storage });
// Définir le schéma Mongoose pour les objets dans votre base de données
const monSchema = new mongoose.Schema({
  nomFichier: String,
  cheminFichier: String
});

const MonObjet = mongoose.model('MonObjet', monSchema);

// Route pour télécharger un fichier
app.post('/upload', upload.single('monFichier'), function (req, res, next) {
  const fichier = req.file;
  
  // Enregistrer le nom et le chemin du fichier dans la base de données
  const nouvelObjet = new MonObjet({
    nomFichier: fichier.originalname,
    cheminFichier: fichier.path
  });

  nouvelObjet.save(function(err) {
    if (err) {
      console.error('Erreur lors de l\'enregistrement dans la base de données :', err);
      return res.status(500).send('Erreur lors de l\'enregistrement dans la base de données.');
    }
    res.send('Fichier téléchargé et enregistré avec succès.');
  });
});