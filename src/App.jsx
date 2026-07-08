
// App.jsx
import UserList from './UserList';

const App = () => {
  const users = [
    { id: 1, name: 'aniso', email: 'aniso@gamail.com' },
    { id: 2, name: 'mohamed', email: 'mohamed@gmail.com' },
  ];

  return (
    <div>
      <UserList users={users} />
    </div>
  );
};

export default App;
