'use client'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Image from 'next/image'
import { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { FormikHelpers } from 'formik'

 interface FormValues {
    email_address: string;
 }

 const Newsletter = () => { 
    const [subscriptionStatus, setSubscriptionStatus] = useState<{
        success: boolean;
        message: string;
    } | null>(null)
 

    const initialValues = {
        email_address: '' 
    }
    const validationSchema = Yup.object({
        email_address: Yup.string().email().required()
    })
    

    const handleNewsLetterSubmission = async (values: FormValues, { setStatus, setSubmitting, resetForm }: FormikHelpers<FormValues>) => {
        const {email_address} = values
        console.log(email_address)
            try{
                setSubmitting(true)
               
                const response = await fetch('https://api.kit.com/v4/forms/8faacd7482/subscribe', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept':'application/json',
                        'Authorization':'Bearer kit_7a7dc559826d3c9a0335aab773b482eb'
                    },
                    body: JSON.stringify({
                        api_key: 'I3dJPuVAhwLK_chfg46vyA',
                        email_address,
                        referrer: window.location.href,
                    })

                })
                if(!response.ok) {
                    const errorData = await response.json();
                    throw new Error(
                        errorData.message || 
                        errorData.error || 
                        `Failed to subscribe (Status: ${response.status} ${response.statusText} )`
                      );
                }
                
                const data = await response.json()
                setStatus(response.status)
                if (data.status == 302 && data.redirect_url){
                    setStatus(data.status)
                    window.open(data.redirect_url, '_blank');
                    throw new Error('Please complete the CAPTCHA verification');
                }
                
                console.log(data, response.status, data.status)
                setSubscriptionStatus({
                    success: true,
                    message: 'Thank you for subscribing! Please check your email to confirm.'
                })
                
            }catch(error) {
                console.log(error)
                setSubscriptionStatus({
                    success: false,
                    message: error instanceof Error ? error.message : 'Failed to subscribe. Please try again.'
                })
            }
            finally{
               
                setSubmitting(false)
                resetForm()
            }
    }

    return (
        <div className="">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleNewsLetterSubmission}
            >
                  {({ isSubmitting, isValid, dirty }) => (
                <Form>
                    <div className="w-full border-2 border-gray-300 flex gap-1 rounded-md my-2 p-2">
                        <Field name='email_address' type='text' placeholder='example@abc.com' className="outline-none w-10/12 bg-black font-semibold text-white " />
                        <button  title='send' type="submit" disabled={isSubmitting || !isValid || !dirty} >
                            {
                                isSubmitting ? <Skeleton circle width={24} height={24} /> :
                                       <Image 
                                       src='/icons/icon-send.svg'
                                       alt='send icon'
                                       width='24'
                                       height='24'
                                       className=''
                                       />
                            }
                        </button>
                    </div>
                        <ErrorMessage name='email_address' component={'div'} className='text-red-500 text-xs' />
                        {subscriptionStatus && (
              <div className={`mt-2 text-sm ${
                subscriptionStatus.success 
                  ? 'text-green-600' 
                  : 'text-red-600'
              }`}>
                {subscriptionStatus.message}
              </div>
            )}
                </Form>
            )}
            </Formik>
        </div>
    )
}

export default Newsletter