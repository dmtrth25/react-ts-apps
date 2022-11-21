import React, { FC, useState, useEffect } from 'react'
import List from './components/List'
import Alert from './components/Alert'
import { TItems, TList } from './types'
import { getLocalStorage } from './localStorFn'

const App: FC = () => {
  const [name, setName] = useState('')
  const [list, setList] = useState<TList[]>(getLocalStorage())
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState<null | string>(null)
  const [alert, setAlert] = useState<TItems>({show: false, msg: '', type: ''})

  const handleForm = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    if(!name) {
      showAlert(true, 'Error! Please enter value', 'danger')
    } else if(name && isEditing) {
      setList(
        list.map((item) => {
          if(item.id === editId) {
            return { ...item, title: name}
          }
          return item
        })
      )
      setName('')
      setEditId(null)
      setIsEditing(false)
      showAlert(true, 'value changes', 'success')
    } else {
      showAlert(true, 'Added to the list', 'success')
      const newItem = {id: new Date().getTime().toString(), title: name}
      setList([...list, newItem])
      setName('')
    }
  }

  const showAlert = (show = false, msg = '', type = '') => { // important! show have default value to execute in useEffect
    setAlert({show, msg, type})
  }

  const clearList = () => {
    showAlert(true, 'Items was removed', 'danger')
    setList([])
  }

  const removeItem = (id: string) => {
    showAlert(true, 'Item removed', 'danger')
    setList(list.filter((item) => item.id !== id))
  }

  const editItem = (id: string) => {
    const editingItem = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditId(id)
    editingItem && setName(editingItem.title)
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <section className="section-center">
      <form className="todo-form" onSubmit={handleForm}>
        { alert.show && <Alert {...alert} removeAlert={showAlert}  list={list}/> }
        <h3>ToDo</h3>
        <div className="form-control">
          <input 
            type="text" 
            className='todo' 
            placeholder='ex. buy iPhone' 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className='submit-btn'>
            {
              isEditing ? 'edit' : 'submit'
            }
          </button>
        </div>        
      </form>
      {
        list.length > 0 && (
          <div className="todo-container">
            <List items={list} removeItem={removeItem} editItem={editItem} />
            <button className="clear-btn" onClick={clearList}>clear</button>
          </div>
        )
      }
    </section>
  )
}

export default App
