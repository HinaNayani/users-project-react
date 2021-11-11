import './Users.css';

const Users = ({users}) => {
  return (
    <div className="Users">
      {users.map((user, key) => {
      return <div key={key} className="user">
        <div>{user.name}</div>
        <div>{user.email}</div>
        <div>{user.phone}</div>
        <div>{user.city}</div>
      </div>
    })}
    </div>
  );
};

export default Users;