

import AddUsers from './components/AddUsers'
import DisplayUsers from './components/DisplayUsers';
import TodoList from './components/TodoList';


export default function Home() {
  return (
    <main >
      <div >
        <AddUsers></AddUsers>
        <DisplayUsers></DisplayUsers>
        <TodoList></TodoList>

      </div>
    </main>
  )
}
