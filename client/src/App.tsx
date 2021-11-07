import { TodoList } from './components/TodoList';
import { Header } from './components/Header';
import { AppContainer } from './components/AppContainer';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SignUp } from './components/SignUp';

const user = 'Jared';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContainer>
        <Header>{user}'s Todo List</Header>
        {/* <SignUp /> */}
        {/* <SignIn /> */}
        <TodoList />
      </AppContainer>
    </QueryClientProvider>
  );
};

export default App;
