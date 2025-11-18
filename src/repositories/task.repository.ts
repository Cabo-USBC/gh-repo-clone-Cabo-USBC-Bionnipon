import Task from '../entities/task.entity.js'

interface TaskData{
    title: string
    userId: number
    completed?: boolean
}

export async function create(data: TaskData){
    return Task.create({data})
}   
