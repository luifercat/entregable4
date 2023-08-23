import swal from "sweetalert";

const UserCard = ({ user, deleteUser, handleClickUpdateUser }) => {
  const userAlertDelete = () => {
    swal({
      title: "ELIMINAR",
      text: "Are you sure you want to delete the user?.....",
      icon: "warning",
      buttons: ["NO", "SI"],
    }).then((resp) => {
      if (resp) {
        deleteUser(user.id);
        swal({
          text: "El Usario A Sido Eliminado Correctamente",
          icon: "success",
        });
      }
    });
  };

  return (
    <section className="border border-sky-700 w-[300px] shadow-2xl bg-slate-200 rounded-xl">
      <ul>
        <li>
          <img
            className=" border-b border-sky-700"
            src={`https://robohash.org/${user.first_name},${user.last_name}`}
            alt=""
          />
        </li>
        <li className="text-center text-xl font-extrabold border-b border-indigo-200 p-2">
          {user.first_name} {user.last_name}
        </li>
        <li className="p-2">
          <i className="bx bxs-envelope"></i>
          <span className="opacity-[0.6]"> Email: </span>
          <div>{user.email}</div>
        </li>
        {/* <li>Password: {user.password}</li> */}

        <li className="px-2 pb-2 border-b border-indigo-200">
          <i className="bx bxs-cake"></i>
          <span className="opacity-[0.6]"> Birthday:</span>
          <div>{user.birthday}</div>
        </li>

        {/* <li>Image: {user.image_url}</li> */}
      </ul>
      <div className="flex items-center justify-center gap-6 p-2">
        <button
          onClick={() => {
            // deleteUser(user.id);
            userAlertDelete();
          }}
          className="      px-6 py-1 font-medium tracking-wide text-white capitalize transition-colors duration-300 bg-blue-600 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          <i className="bx bxs-trash"></i>
        </button>
        <button
          onClick={() => {
            handleClickUpdateUser(user);
          }}
          className=" ml-2      px-6 py-1 font-medium tracking-wide text-white capitalize transition-colors duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          <i className="bx bxs-edit-alt"></i>
        </button>
      </div>
    </section>
  );
};
export default UserCard;
