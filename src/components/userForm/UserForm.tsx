import React, { useState, useEffect} from 'react';
export interface UserFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    role: string;
    location: string;
    department: string;
  }
interface UserFormProps {
    initialData?: Partial<UserFormData>;
    onSubmit: (data: UserFormData) => void;
    formTitle: string;
}

const UserForm:React.FC<UserFormProps>=({ initialData = {}, onSubmit, formTitle }) => {
  const [formData, setFormData] = useState<UserFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
    location: '',
    department: '',
    ...initialData
  });

  useEffect(() => {
      setFormData((prev) => ({ ...prev, ...initialData }));
  }, [initialData?.email]);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <>
<h1 className='text-center text-2xl font-semibold m-3'>{formTitle}</h1>
<form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 border rounded-md shadow-md bg-white">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            FIRST NAME <span className="text-red-500">*</span>
          </label>
          <input value={formData.firstName} name='firstName' placeholder='First Name' onChange={handleChange} type="text" className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            LAST NAME <span className="text-red-500">*</span>
          </label>
          <input value={formData.lastName} name='lastName' onChange={handleChange} type="text" placeholder="Last Name" className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            PHONE <span className="text-red-500">*</span>
          </label>
          <input value={formData.phone} onChange={handleChange} name='phone' type="tel" placeholder="Phone Number" className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            EMAIL ID <span className="text-red-500">*</span>
          </label>
          <input value={formData.email} name='email' onChange={handleChange} type="email" placeholder="Email Id" className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ROLE <span className="text-red-500">*</span>
          </label>
          <input value={formData.role} name='role' onChange={handleChange} type="text" placeholder="Role" className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            LOCATION <span className="text-red-500">*</span>
          </label>
          <input value={formData.location} name='location' onChange={handleChange} type="text" placeholder="Location" className="w-full border px-3 py-2 rounded" />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            DEPARTMENT <span className="text-red-500">*</span>
          </label>
          <input value={formData.department} name='department' onChange={handleChange} type="text" placeholder="Department" className="w-full border px-3 py-2 rounded" />
        </div>
      </div>
      <button type='submit'  className='cursor-pointer bg-green-500 p-2 px-4 mt-3 rounded-xl'>Add User</button>
    </form>
    </>


  );
};

export default UserForm;
