"use client"
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";

import * as z from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            {...register('name')}
            placeholder="Your Name"
            className="w-full p-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>
        <div>
          <input
            {...register('email')}
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
      </div>
      <input
        {...register('subject')}
        placeholder="Subject"
        className="w-full p-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg"
      />
      {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
      <textarea
        {...register('message')}
        placeholder="Your Message"
        rows={5}
        className="w-full p-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg"
      ></textarea>
      {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
      <button
        type="submit"
        className="w-full bg-primary hover:bg-opacity-80 text-white font-bold py-3 rounded-lg"
      >
        Send Message
      </button>
    </form>
  );
}
