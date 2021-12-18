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
    const [searching, setSearching] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    // const [bodyFromTodo, setBodyFromTodo] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")


    const [todoEditing, setTodoEditing] = useState({});

    //add todo to array
    const addTodo = (todo) => {
        setTodos((old) => [...old, todo])
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
        setTodosTemp(todosTemp.map(item => item.id === id ? { ...item, priority } : item))
    }

    //edit todo
    const editTodo = (todoEditing, body) => {
        setTodos(todos.map(item => item.id === todoEditing.id ? { ...todoEditing, body } : item))
        setModSelector(false)
        closeModalEdit()
    }

    //return todo
    // const returnTodo = (id) => {
    //     setBodyFromTodo(todos.filter(todo => todo.id === id));
    // }

    //search todo
    const searchTodo = (text) => {
        if (text) {
            setSearching(true)
            setSearchTerm(text)
            // clearTimeout()
            // setTimeout(() => {
            //     // setTodosTemp(todos.filter(todo => todo.body.toLowerCase().includes(text.toLowerCase())))
            //     // const newArray = []
            //     // todos.forEach(todo => {
            //     //     if(todo.body.toLowerCase().includes(text.toLowerCase())){
            //     //         newArray.push(todo)
            //     //     }
            //     // })
            //     setTodosTemp(newArray)
            // }, 250)
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

    //modal edit
    const openModalEdit = (todo) => {
        setModalEdit(true)
        // returnTodo(id)
        // setIdFromTodo(id)

        setTodoEditing(todo)
    }

    const closeModalEdit = () => {
        setModalEdit(false)
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

    useEffect(() => {
        if (localStorage.getItem('todos')) {
            setTodos(JSON.parse(localStorage.getItem('todos')))
            setIncompleted(checkIncompletedTodo(todos))
            setCompleted(checkCompletedTodo(todos))
        }
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
        setIncompleted(checkIncompletedTodo(todos))
        setCompleted(checkCompletedTodo(todos))
    }, [todos, todosTemp, searching])


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
        searching,
        closeModalEdit,
        openModalEdit,
        modalEdit,
        // bodyFromTodo,
        editTodo,
        todoEditing,
        searchTerm
    }

    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    )
}
