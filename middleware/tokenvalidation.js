
/*const jwt = require('jsonwebtoken');
const token = require('../controllers/userController'); 

const authMiddleware =(req, res, next)=> {
 

  if (!token) {
    return res.status(401).json({ message: 'Accès non autorisé. Token manquant.' });
  }

  try {
    const decoded = jwt.verify(payload, "1234");

    req.user = decoded;

    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Accès non autorisé. Token invalide.' });
  }
}

module.exports = authMiddleware;*/
