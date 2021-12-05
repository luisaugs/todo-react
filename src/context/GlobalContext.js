import React, { createContext, useState, useEffect } from 'react'

export const GlobalContext = createContext()

export default function GlobalProvider({ children }) {

    const [todos, setTodos] = useState([]);
    const [todosTemp, setTodosTemp] = useState([]);
    const [completed, setCompleted] = useState(false);
    const [incompleted, setIncompleted] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [idFromTodo, setIdFromTodo] = useState(null);
    const [modSelector, setModSelector] = useState(false);
    const [searching, setSearching] = useState(false)
    // const [selectPriority, setSelectPriority] = useState("high");

    //add todo to array
    const addTodo = (todo) => {
        setTodos((old) => [...old, todo])
        reset()
    }

    //remove todo from array
    const removeTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id))
        setModalDelete(false)
    }

    //set checked a todo
    const checkCompleted = (id) => {
        setTodos(todos.map(item => item.id === id ? { ...item, completed: !item.completed } : item))
        setCompleted(true)
    }

    //set priority color
    const checkColor = (id, priority) => {
        setTodos(todos.map(item => item.id === id ? { ...item, priority } : item))
    }

    const searchTodo = (text) => {
        if (text) {
            setSearching(true)
            setTodosTemp(todos.filter(todo => todo.body.toLowerCase().includes(text.toLowerCase())))
        } else {
            setSearching(false)
        }
    }

    //modal delete
    const openModalDelete = (id) => {
        setModalDelete(true)
        setIdFromTodo(id)
    }

    const closeModalDelete = () => {
        setModalDelete(false)
    }

    //modal priority
    const openModalPriority = (id) => {
        setModSelector(true)
        setIdFromTodo(id)
    }

    const closeModalPriority = () => {
        setModSelector(false)
    }

    // verify state todo
    const checkIncompletedTodo = (todos) => {
        return (
            todos.some(todo => {
                if (todo.completed === false) {
                    return true
                } else {
                    return false
                }
            })
        )
    }

    const checkCompletedTodo = (todos) => {
        return (
            todos.some(todo => {
                if (todo.completed === true) {
                    return true
                } else {
                    return false
                }
            })
        )
    }

    const reset = () => {
        setSearching(false);
        if (todos) {
            setIncompleted(checkIncompletedTodo(todos))
            setCompleted(checkCompletedTodo(todos))
        }
    }

    useEffect(() => {
        if (localStorage.getItem('todos')) {
            setTodos(JSON.parse(localStorage.getItem('todos')))
            // console.log(checkIncompletedTodo(todos))
            // console.log(checkCompletedTodo(todos))
            setIncompleted(checkIncompletedTodo(todos))
            setCompleted(checkCompletedTodo(todos))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
        // console.log(checkIncompletedTodo(todos), "🍑")
        // console.log(checkCompletedTodo(todos),"🧺")
        setIncompleted(checkIncompletedTodo(todos))
        setCompleted(checkCompletedTodo(todos))
    }, [todos, todosTemp,searching])


    const values = {
        todos,
        setTodos,
        addTodo,
        removeTodo,
        checkCompleted,
        checkColor,
        searchTodo,
        todosTemp,
        completed,
        incompleted,
        openModalDelete,
        closeModalDelete,
        modalDelete,
        idFromTodo,
        openModalPriority,
        closeModalPriority,
        modSelector,
        searching
    }

    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    )
}
