import express from 'express';
import { tasksData } from './tasksData';

const router = express.Router();

// Get all tasks
router.get('/', (req, res) => {
    res.json(tasksData);
});

export default router;