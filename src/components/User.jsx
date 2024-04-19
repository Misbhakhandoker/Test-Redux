import { useDispatch, useSelector } from "react-redux";
import Nav from "./Nav";
import { userDelete } from "../reducer/UserReducer";

const User = () => {
  const { users } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch()
  const DeleteHandler = (index) => {
    dispatch(userDelete(index))
  }

  return (
    <div className="w-full h-screen text-white bg-zinc-900">
      <Nav />
        <h1 className="text-3xl text-center">User List</h1>
      <div className="px-2 py-1 text-white ">
        <ul className="p-5">
          {users.map((user,index) => (
            <li key={user.id} className="">
             {user.id} 👉 {user.name} <span onClick={()=> DeleteHandler(index)} className="text-red-500 cursor-pointer">❌</span> 
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default User;
