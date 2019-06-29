import express from 'express';

const router = express.Router();


router.get('/api', (req, res) => res.status(200).send({
  message: 'Welcome to the Todos API!',
}));

export default router;