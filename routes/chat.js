const express = require('express');
const router = express.Router();

// Página principal da sala de bate-papo
router.get('/', (req, res) => {
    // Verificar se o usuário está autenticado
    if (!req.session.user) {
        res.redirect('/');
    } else {
        // Renderizar a página principal da sala de bate-papo
        res.send(`Bem-vindo à sala de bate-papo, ${req.session.user}!`);
    }
});

// Envio de mensagens
router.post('/send-message', (req, res) => {
    // Implementar a lógica para enviar mensagens
    res.send('Mensagem enviada com sucesso!');
});

module.exports = router;
