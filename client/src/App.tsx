import { TodoList } from './components/TodoList';
import { TodosProvider } from './context/TodosProvider';
import { Header } from './components/Header';
import { AppContainer } from './components/AppContainer';

const user = 'Jared';

const App = () => {
  return (
    <AppContainer>
      <Header>{user}'s Todo List</Header>
      <TodosProvider>
        <TodoList />
      </TodosProvider>
    </AppContainer>
  );
};

export default App;
