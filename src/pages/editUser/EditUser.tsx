import {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams , useNavigate} from 'react-router';
import type { UserFormData } from '../../components/userForm/UserForm';
import UserForm from '../../components/userForm/UserForm';
const EditUser:React.FC = () => {
  const {id}=useParams<{id:string}>();
  const [editFormData, setEditFormData] = useState<UserFormData | null>(null);
  const navigate=useNavigate();
  useEffect(()=>{
    const fetchUser=async()=>{
      try{
        const res=await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/user/${id}`)
        setEditFormData(res.data);
        console.log(res.data);
      }
      catch(error){
        console.log("Error fetching user:"+error); 
      }
    }
    fetchUser();
  },[id])

  const handleFormSubmit = async (data:UserFormData) => {
    try {
      await axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/user/${id}`, data);
      alert("User updated successfully");
      navigate('/'); 
    } catch (error) {
      alert('Failed to update user'+error);
    }
  };

  return  editFormData ? ( 
    <UserForm initialData={editFormData} onSubmit={handleFormSubmit} formTitle='Edit User' />
  ):(<p>Loading...</p>);
};

export default EditUser;
