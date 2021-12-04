import React, { createContext, useState, useEffect } from 'react'

export const GlobalContext = createContext()

export default function GlobalProvider({ children }) {

    const [todos, setTodos] = useState([])
    const [todosTemp, setTodosTemp] = useState([])


    //add todo to array
    const addTodo = (todo) => {
        setTodos((old) => [...old, todo])
    }

    //remove todo from array
    const removeTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id))
    }

    //set checked a todo
    const checkCompleted = (id) => {
        setTodos(todos.map(item => item.id === id ? { ...item, completed: !item.completed } : item))
    }

    //set priority color
    const checkColor = (id, priority) => {
        setTodos(todos.map(item => item.id === id ? { ...item, priority } : item))
    }

    const searchTodo = (text) => {

        clearTimeout();
        setTimeout(() => {

            setTodosTemp(todos.filter(todo => todo.body.toLowerCase().includes(text.toLowerCase())))

        }, 250)

    }


    useEffect(() => {
        if (localStorage.getItem('todos')) {
            setTodos(JSON.parse(localStorage.getItem('todos')))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    const values = {
        todos,
        setTodos,
        addTodo,
        removeTodo,
        checkCompleted,
        checkColor,
        searchTodo,
        todosTemp
    }

    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    )
}
