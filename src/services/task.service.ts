import * as taskRepository from '../repositories/task.repository.js'

interface TaskData{
    title: string
    userId: number
    completed?: boolean
}

export async function createTask(data: TaskData){
    return await taskRepository.create(data)
}
