
import axios from 'axios'
import  type {UserFormData} from '../../components/userForm/UserForm';
import { useNavigate } from 'react-router';
import UserForm from '../../components/userForm/UserForm';


const AddUser:React.FC = () => {

  const navigate=useNavigate();
  const handleAddUser = async (data:UserFormData) => {
    try {
      const res=await axios.post(`${process.env.REACT_APP_API_BASE_URL}/user/add`, data);
      alert(res.data.message);
      navigate('/');
    } catch (err) {
      console.error('Error adding user:', err);
    }
  };
  return (
    <>
    <UserForm formTitle="Add New User" onSubmit={handleAddUser} />;
    </>
  );
};

export default AddUser;
