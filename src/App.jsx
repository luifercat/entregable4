import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ModalFormUser from "./components/ModalFormUser";
import { EMPTY_FORM_VALUES } from "./components/shared/constants";
import UserList from "./components/UserList";

const BASE_URL = "https://users-crud.academlo.tech/";

function App() {
  const [isShowModal, setisShowModal] = useState(false); //para mostrar o no el form
  const [users, setUsers] = useState([]); // estado e usuarios
  const [isUserToUpdate, setIsUserToUpdate] = useState(null); // estado para saber si se esta editando o no  (usado para actualizar)

  const getAllUsers = () => {
    axios
      .get(BASE_URL + "users/")
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err));
  };

  const createUser = (newUser, reset) => {
    axios
      .post(BASE_URL + "users/", newUser)
      .then(({ data }) => {
        getAllUsers();
        reset(EMPTY_FORM_VALUES); //funcion que de react-hook-form que vacia los campos del for que yo desee
      })
      .catch((err) => console.log(err));
  };

  const deleteUser = (idUser) => {
    axios
      .delete(BASE_URL + `users/${idUser}/`)
      .then(({}) => getAllUsers())
      .catch((err) => console.log(err));
  };

  const updateUser = (userUpdated, reset) => {
    //recibe funcion reset para limpiar el formulario
    axios
      .patch(BASE_URL + `users/${isUserToUpdate.id}/`, userUpdated)
      .then(() => {
        getAllUsers();
        setisShowModal(false);
        reset(EMPTY_FORM_VALUES); //resetea el formulario con campos vacios
        setIsUserToUpdate(null);
      })
      .catch((err) => console.log(err));
  };

  const handleClickUpdateUser = (user) => {
    setisShowModal(true);
    setIsUserToUpdate(user);
  };

  const handleClickOpenModal = () => {
    setisShowModal(true);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <main className="font-Open Sans">
      <div className="flex flex-wrap  items-center justify-evenly bg-[#003f8f] bg-gradient-to-l from-indigo-300 md:from-indigo-300] h-32 mb-6 md390:h-24">
        <h2 className=" text-5xl text-[#dedeff] md600:text-3xl md390:text-2xl">
          User Management Module
        </h2>

        <button
          onClick={handleClickOpenModal}
          className=" h-12 p-2 px-6 py-2 font-medium tracking-wide text-white text-xl capitalize transition-colors duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 md390:text-lg
          md390:h-10 md390:p-1"
        >
          Create User
        </button>
      </div>
      <ModalFormUser
        isShowModal={isShowModal}
        createUser={createUser}
        isUserToUpdate={isUserToUpdate}
        updateUser={updateUser}
        setisShowModal={setisShowModal}
        setIsUserToUpdate={setIsUserToUpdate}
      />
      <UserList
        users={users}
        deleteUser={deleteUser}
        handleClickUpdateUser={handleClickUpdateUser}
      />

      <footer className="flex flex-wrap space-x-96 items-center justify-center bg-[#003f8f] bg-gradient-to-l from-indigo-300 md:from-indigo-300] h-32 mt-6">
        <p className="font-bold text-[#dedeff]">
          by <span>Luis Fernando Díaz Mendoza</span> | G-28 Academlo
        </p>
      </footer>
    </main>
  );
}

export default App;
