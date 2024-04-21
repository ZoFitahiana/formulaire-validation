"use client"
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";


const formSchema = z.object({
    name: z.string().min(10),
    email: z.string().email(),
    num: z.string().min(10),
    message: z.string().min(20)
  });

  
interface FormInput {
  name: string;
  email: string;
  num: string;
  message: string;
}

export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInput>({
      resolver: zodResolver(formSchema)
    });
  
    const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);
  
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="mt-12 max-w-md mx-auto p-4  rounded border border-gray-300">
        <label className="block mb-2">Name:</label>
        <input {...register("name")} className="w-full p-2 mb-4 border border-gray-300 rounded" />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
  
        <label className="block mb-2">Email:</label>
        <input {...register("email")} className="w-full p-2 mb-4 border border-gray-300 rounded" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
  
        <label className="block mb-2">Num:</label>
        <input {...register("num")} className="w-full p-2 mb-4 border border-gray-300 rounded" />
        {errors.num && <p className="text-red-500">{errors.num.message}</p>}
  
        <label className="block mb-2">Message:</label>
        <input {...register("message")} className="w-full p-2 mb-4 border border-gray-300 rounded" />
        {errors.message && <p className="text-red-500">{errors.message.message}</p>}
  
        <button type="submit" className="bg-blue-500  py-2 px-4 rounded hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">Submit</button>
      </form>
    );
  }
  
