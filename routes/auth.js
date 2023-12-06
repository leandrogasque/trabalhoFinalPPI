const express = require('express');
const router = express.Router();

// Página principal após o login
router.get('/dashboard', (req, res) => {
    // Verificar se o usuário está autenticado
    if (!req.session.user) {
        res.redirect('/');
    } else {
        // Renderizar o menu do sistema
        res.send(`
            <h1>Menu do Sistema</h1>
            <ul>
                <li><a href="/auth/register-user">Cadastro de Usuários</a></li>
                <li><a href="/chat">Bate-papo</a></li>
                <li><a href="/auth/logout">Logout</a></li>
            </ul>
        `);
    }
});

// Cadastro de usuários
router.get('/register-user', (req, res) => {
    // Verificar se o usuário está autenticado
    if (!req.session.user) {
        res.redirect('/');
    } else {
        // Renderizar o formulário de cadastro de usuários
        res.send(`
            <h1>Cadastro de Usuários</h1>
            <form method="post" action="/auth/register">
                <label for="name">Nome:</label>
                <input type="text" id="name" name="name" required><br>

                <label for="birthdate">Data de Nascimento:</label>
                <input type="date" id="birthdate" name="birthdate" required><br>

                <label for="nickname">Nickname ou Apelido:</label>
                <input type="text" id="nickname" name="nickname" required><br>

                <input type="submit" value="Cadastrar">
            </form>
        `);
    }
});

// Rota para o cadastro de usuários (post)
router.post('/register', (req, res) => {
    // Implementar a lógica para validar e cadastrar usuários no banco de dados
    const { name, birthdate, nickname } = req.body;

    // Exemplo: Validar os dados e cadastrar no banco de dados
    if (name && birthdate && nickname) {
        // Lógica de validação e cadastro
        res.send('Usuário cadastrado com sucesso!');
    } else {
        res.send('Erro ao cadastrar usuário. Preencha todos os campos.');
    }
});

// Login
router.post('/login', (req, res) => {
    // Implementar a lógica para autenticação de usuários
    req.session.user = req.body.username; // Exemplo: salvar o nome do usuário na sessão
    res.redirect('/auth/dashboard');
});

// Logout
router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;
