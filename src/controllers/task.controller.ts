import type express from "express"
import * as taskService from '../services/task.service.js'

export async function createUser(req: express.Request,res: express.Response){
    const {title,userId,completed} = req.body 
    const task = await taskService.createTask({title,userId,completed})
    res.status(201).json(task)
} 