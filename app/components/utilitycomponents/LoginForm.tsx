 'use client'
 import { Formik, Form, Field, ErrorMessage } from 'formik'
 import * as Yup from 'yup'
 import clsx from 'clsx'
 import { useDispatch,   } from 'react-redux'
 import { loginSuccess } from '@/app/store/slices/userSlice'
 
 import { useRouter } from 'next/navigation'

 

 

export const LoginForm = () => {
    const dispatch = useDispatch()
    const router = useRouter()

    const validationSchema = Yup.object({
        password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long'),
      email: Yup.string().email('Invalid email address').required('Required'),
    })

    const initialValues = {
        email: '',
        password: '',
    }

    const submitLogin = async(values: typeof initialValues) => {
       
        const {email, password} = values
       await dispatch(loginSuccess({email, password}))
        router.push('/')
    }

   

  return (
    <div>
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submitLogin}
         > 

            {  (formik) => (
                <Form action="" className="flex flex-col gap-10 mt-12">
                    <div className="">
                        <Field 
                            placeholder='Email' 
                            name='email' 
                            className='outline-none border-b-2 border-gray-400 p-2 w-full' />
                        <ErrorMessage 
                            name='email' component="div" className='text-red-400 text-sm' />
                    </div>
                    <div className="">
                        <Field 
                            name='password' 
                            type="password" 
                            placeholder='********' 
                            className="outline-none border-b-2 border-gray-400 p-2 w-full " />
                        <ErrorMessage name='password' component="div" className='text-red-400 text-sm' />
                    </div> 
                    <div className=" flex flex-row gap-9 justify-between items-center"> 
                        <button disabled={formik.isSubmitting || !formik.isValid} 
                            className={clsx(" text-white text-sm py-3 px-12 rounded-md",{
                                'bg-gray-400' : (formik.isSubmitting || !formik.isValid),
                                'bg-red-500' : !(formik.isSubmitting || !formik.isValid),

                            })}>Log in</button>
                        <button className="bg-transparent text-red-600 text-sm  py-3 px-1 rounded-md">Forget Password?</button>
                    </div> 
                </Form>
           ) }
        </Formik> 
  </div>
  )
}
