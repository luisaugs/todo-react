import React, { createContext, useState, useEffect } from 'react'

export const GlobalContext = createContext()

export default function GlobalProvider({ children }) {

    const [todos, setTodos] = useState([])


    //add todo to array
    const addTodo = (todo) => {

        setTodos((old) => [...old, todo])

    }

    //remove todo from array
    const removeTodo = (id) => {

        setTodos((prev) => prev.filter((todo) => todo.id !== id))

    }

    const checkCompleted = (id) => {

        setTodos(todos.map(item => item.id === id ? { ...item, completed: !item.completed } : item))

    }

    const checkColor= (id, priority) => {

        setTodos(todos.map(item => item.id === id ? { ...item, priority } : item))

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
        checkColor
    }

    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    )
}
