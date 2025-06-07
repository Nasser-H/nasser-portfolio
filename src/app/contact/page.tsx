'use client'
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify';

export default function Contact() {
    useEffect(()=>{
        emailjs.init("AGnfkWTtBDYPSP4aS");
    },[]);
    function handleSubmit(values : {name: string, email: string, message: string}){
        emailjs.send(
            'service_c2zxzo4',
            'template_67d85lk',
            {
                name : values.name,
                email: values.email,
                time: new Date().toLocaleString(),
                message: values.message
            }
        ).then(()=>{
            toast.success('تم إرسال الرسالة بنجاح!');
            formik.resetForm();
        }).catch(()=>{
            toast.error('فشل في إرسال الرسالة. حاول مرة أخرى.');
        });
        
    }
    const validationSchema = Yup.object().shape({
        name : Yup.string().required('الاسم مطلوب 😒'),
        email: Yup.string().email('هذا الإيميل غير صالح 😒').required('الإيميل مطلوب 😒'),
        message: Yup.string().required('الرسالة مطلوبة 😒')
    });
    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            message:''
        },
        validationSchema,
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit:handleSubmit
    });
    useEffect(()=>{
        if(formik.isSubmitting && Object.keys(formik.errors).length > 0){
            Object.values(formik.errors).forEach((e)=>{
                toast.info(e);
            })
        }
    },[formik.errors, formik.isSubmitting]);
  return <>
    <div dir='rtl' className='text-center mt-16 mb-10'>
        <h1 className='mb-8 text-main text-3xl font-extralight'>تواصل معي</h1>
        <div className='lg:flex space-y-10 lg:space-y-0 flex-wrap'>
            <div className='w-1/2 lg:px-10 px-4'>
                <div className='bg-white/10 rounded-lg px-6 py-10 md:min-w-[310px] min-w-[240px]'>
                    <h3 className='text-lg text-main font-bold'>الهاتف</h3>
                    <a dir='ltr' href='tel:+20161132684' className='text-white font-extralight mt-1 block'>+20 106 1132 684</a>
                </div>
            </div>
            <div className='w-1/2 lg:px-10 px-4'>
                <div className='bg-white/10 rounded-lg px-6 py-10 md:min-w-[310px] min-w-[240px]'>
                    <h3 className='text-lg text-main font-bold'>البريد الألكتروني</h3>
                    <a href='mailto:nasser.h0404@gmail.com' className='text-white font-extralight mt-1 block'>nasser.h0404@gmail.com</a>
                </div>
            </div>
        </div>
        <div>
        <form onSubmit={formik.handleSubmit} className="md:max-w-[340px] max-w-[250px] mx-auto bg-white/10 rounded-lg mt-12 p-6 text-right">
            <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-bold text-main">الأسم</label>
                <input value={formik.values.name} onChange={formik.handleChange} type="text" id='name' className="text-sm rounded-lg block w-full p-2.5" />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-bold text-main">الإيميل</label>
                <input value={formik.values.email} onChange={formik.handleChange} type="text" id='email' className="text-sm rounded-lg block w-full p-2.5" />
            </div>
            <div className="mb-5">
                <label htmlFor="message" className="block mb-2 text-sm font-bold text-main">الرسالة</label>
                <textarea value={formik.values.message} onChange={formik.handleChange} id='message' className="text-sm rounded-lg block w-full p-2.5"></textarea>
            </div>
            <button type="submit" className="bg-main py-2 px-4 font-light text-white rounded-md">ارسال الرسالة</button>
        </form>
        </div>
    </div>
    <ToastContainer
        position="top-right"
        autoClose={6000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        theme="dark"
        pauseOnFocusLoss
        draggable
        pauseOnHover
    />
  </>
}
