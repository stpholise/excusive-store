 "use client"
 import {  Formik, Form, Field,  ErrorMessage } from 'formik'
 import * as Yup from 'yup'

interface InitialValue {
    firstName: string;
    lastName: string;
    email: string;
    adress: string;
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}

const validationSchema =  Yup.object({
    firstName: Yup.string().min(3, 'at least 3 alphabets').required('Required'),
    lastName: Yup.string().min(3,'at least 3 alphabets').max(15, 'must be 15 characters or less').required(),
    email: Yup.string().email('Invalid Email address').required('Required'),
    address: Yup.string(),

    
})

const initialValue: InitialValue =  {
    firstName :'',
    lastName: '',
    email:'',
    adress:'',
    currentPassword: '222abcde',
    newPassword :'',
    confirmPassword:'',
}

const handleProfileUpdate = () => {

}

const EditProfile = () => {
  return (
    <div className='px-8 lg:px-12 py-12'>
       <h2 className='text-red-400 font-bold text-3xl' > Edit Your Profile</h2>
      
      <Formik 
            initialValues={initialValue}
            validationSchema={validationSchema}
            onSubmit={handleProfileUpdate}
       >
            <Form>
                <div className="grid grid-cols-2 gap-x-10 gap-y-5 py-8 ">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="firstName">First Name</label>
                        <Field name='firstName'  placeholder='Mdew' className='bg-[#f5f5f5] w-full rounded-md px-4 py-3 outline-none ' type='text' />
                        <ErrorMessage name='firstName' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor='lastName'>Last Name</label>
                        <Field name='lastName' placeholder='Rimel'  className='bg-[#f5f5f5] w-full rounded-md px-4 py-3 outline-none ' type='text' />
                        <ErrorMessage name='lastName' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">Email</label>
                        <Field name='email'  placeholder='rimel1111@gmail.com' className='bg-[#f5f5f5] w-full rounded-md px-4 py-3 outline-none ' type='email' />
                        <ErrorMessage name='email' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="address">Address</label>
                        <Field name='address' placeholder='Kingston, 5236, United State' className='bg-[#f5f5f5] w-full rounded-md px-4 py-3 outline-none ' type='text' />
                        <ErrorMessage name='address' />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p className=""> Password Changes</p>
                    <div className="">
                        <Field name='currentPassword' placeholder='Current Passwod' className='bg-[#f5f5f5] w-full rounded-md px-4 py-3 outline-none ' type='text' />
                        <ErrorMessage name='currentPassword' />
                    </div>
                    <div className="">
                        <Field name='newPassword' placeholder='New Passwod'  className='bg-[#f5f5f5] w-full rounded-md px-4 py-3 outline-none ' type='password' />
                        <ErrorMessage name='newPassword' />
                    </div>
                    <div className="">
                        <Field name='confirmPassword' placeholder='Confirm New Passwod'  className='bg-[#f5f5f5] w-full rounded-md px-4 py-3 outline-none ' type='text' />
                        <ErrorMessage name='confirmPassword' />
                    </div>
                </div>
                <div className="flex justify-end item-center py-8 gap-8 ">
                    <div className="flex items-center">
                        <button className="cancel w-20">Cancel</button>
                    </div>
                    <div className="">
                        <button className="text-white bg-red-600 py-3 px-12 rounded-md">Save Changes</button>
                    </div>
                </div>
            </Form>
      </Formik>

    </div>
  )
}

export default EditProfile