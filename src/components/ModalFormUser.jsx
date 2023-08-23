import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { EMPTY_FORM_VALUES } from "./shared/constants";

const userAlertUpdate = () => {
  swal({
    title: "Success Update",
    icon: "success",
    button: "OK",
  });
};

const ModalFormUser = ({
  isShowModal,
  createUser,
  isUserToUpdate,
  updateUser,
  setisShowModal,
  setIsUserToUpdate,
}) => {
  const { handleSubmit, register, reset } = useForm(); //funciones de react-hook-form

  const submit = (data) => {
    //console.log(data); //data es la inf que se trae del formulario
    data.image_url = null;
    if (isUserToUpdate) {
      updateUser(data, reset); //pasa func reset a App updatUser para limpiar el formulario
      userAlertUpdate();
    } else {
      createUser(data, reset); //reset sirve para vaciar o montar inf al formulario
    }
  };

  const handleClickCloseModal = () => {
    setisShowModal(false);
    reset(EMPTY_FORM_VALUES);
    setIsUserToUpdate(null);
  };

  useEffect(() => {
    if (isUserToUpdate) {
      // if para asegurarnos que el estado tiene informacion del user a actualizar
      reset(isUserToUpdate); //1:12:30 16ago usamos reset para montar inf que se va a actualizar al formulario. Uso isUserTopdate para reset puesto que en ese estado tengo la informacion y esta en el formato que usa la api
    }
  }, [isUserToUpdate]);

  return (
    <section
      className={`fixed bg-black/60 top-0 bottom-0 left-0 right-0 flex justify-center items-center transition-[opacity_transform] duration-1000  ${
        isShowModal
          ? "visible opacity-100 scale-100"
          : "invisible opacity-0 scale-0"
      }`}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-blue-100 grid gap-4 p-2 rounded-md relative w-[300px]     "
      >
        <button
          onClick={handleClickCloseModal}
          className="absolute top-1 right-2    bx bxs-x-circle bx-md"
          type="button"
        ></button>
        <h2 className="text-center font- font-extrabold text-2xl text-blue-600">
          {isUserToUpdate ? "UPDATE USER" : " CREATE USER"}
        </h2>
        <div className="grid">
          <label htmlFor="first_name">
            <i className="bx bxs-user"></i>
          </label>
          <input
            className="outLine-none border-[1px] border-black p1"
            id="first_name"
            name="first_name"
            type="text"
            placeholder="First Name"
            {...register("first_name")}
            required
          />
        </div>
        <div className="grid">
          <label htmlFor="last_name">
            <i className="bx bxs-user-circle"></i>
          </label>
          <input
            className="outLine-none border-[1px] border-black p1"
            id="last_name"
            name="last_name"
            type="text"
            placeholder="Last Name"
            {...register("last_name")}
            required
          />
        </div>
        <div className="grid">
          <label htmlFor="email">
            <i className="bx bxs-envelope"></i>
          </label>
          <input
            className="outLine-none border-[1px] border-black p1"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            {...register("email")}
            required
          />
        </div>
        <div className="grid">
          <label htmlFor="password">
            <i className="bx bxs-key"></i>
          </label>
          <input
            className="outLine-none border-[1px] border-black p1"
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            {...register("password")}
            required
          />
        </div>

        <div className="grid">
          <label htmlFor="birthday">
            <i className="bx bxs-cake"></i>Birthday
          </label>
          <input
            className="outLine-none border-[1px] border-black p1"
            id="birthday"
            name="birthday"
            type="date"
            placeholder="Birthday"
            {...register("birthday")}
          />
        </div>
        {/* <div className="grid">
          <label htmlFor="image_url">Image</label>
          <input
            className="outLine-none border-[1px] border-black p1"
            id="image_url"
            name="image_url"
            type="text"
            placeholder="Image"
            {...register("image_url")}
          />
        </div> */}
        <button className="        px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          {isUserToUpdate ? "UPDATE USER" : "SAVE"}
        </button>
      </form>
    </section>
  );
};
export default ModalFormUser;
