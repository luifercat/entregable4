import UserCard from "./UserCard";

const UserList = ({ users, deleteUser, handleClickUpdateUser }) => {
  console.log(users);

  return (
    <section className="flex flex-wrap     gap-8 place-content-center">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          handleClickUpdateUser={handleClickUpdateUser}
        />
      ))}
    </section>
  );
};
export default UserList;
