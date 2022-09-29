import users from '../data/users.json';
import UserCard from './UserCard';

const List = () => {
  return (
    <div>
      <h2 className="text-2xl text-slate-500 hover:text-blue-600">List</h2>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-5">
        {users.map((user) => (
          <UserCard key={`user-key-item-${user.id}`} {...user} />
        ))}
      </ul>
    </div>
  );
};

export default List;
