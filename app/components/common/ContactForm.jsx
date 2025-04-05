"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { createClient } from '@supabase/supabase-js';
import Button from './Button';
import { useState } from 'react';
import qr from '../../../public/whatsappimages/qrcode.jpeg';
import Image from 'next/image';
import Toast from './Toast';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
const contactSchema = z.object({
    full_name: z.string().min(2, 'Full Name must be at least 2 characters'),
    age: z.string().min(1, 'Age is required'),
    gender: z.enum(['Male', 'Female', 'Other']),
    blood_group: z.string().min(1, 'Blood Group is required'),
    email: z.string().email('Invalid email address'),
    club_name: z.string().optional(),
    solo: z.enum(['Yes', 'No']),
    state: z.string().min(2, 'State is required'),
    event_name: z.literal('Statehood Riders Meet Sikkim 2025'),
    food_preference: z.enum(['Vegetarian', 'Non-Vegetarian']),
    tshirt_size: z.enum(['Small', 'Medium', 'Large', 'XLarge', 'XXLarge']),
    motorcycle_model: z.string().min(2, 'Motorcycle Model is required'),
    registration_number: z.string().min(2, 'Registration Number is required'),
    emergency_contact_name: z.string().min(2, 'Emergency Contact Name is required'),
    emergency_contact_number: z.string().min(10, 'Valid contact number is required'),
    payment_status: z.enum(['Paid', 'Pending']),
    payment_ref_no: z.string().min(12, 'Payment reference number is required and should be 12 characters long and number').max(12, 'Payment reference number shouldnt be more than 12 characters long').regex(/^\d+$/, 'Payment reference number should be a number'),
    payment_mode: z.literal('Online'),
    payment_details: z.string().optional(),
    terms_and_conditions: z.boolean().refine((val) => val === true, 'You must agree to the terms and conditions'),
  });

export function ContactForm() {
  const [showQRModal, setShowQRModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const copyUPIId = () => {
    navigator.clipboard.writeText("12411123@cbin");
    showToast("UPI ID copied to clipboard!");
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('registrations').insert([data]);
      
      if (error) {
        console.error('Error inserting data:', error.message);
        showToast('Registration failed. Please try again.', 'error');
        return;
      }
      
      showToast('Registration successful!');
      reset();
    } catch (err) {
      console.error('Unexpected error:', err);
      showToast('An unexpected error occurred', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ ...toast, show: false })}
        />
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Personal Information */}
          <div>
            <input
              {...register('full_name')}
              placeholder="Full Name"
              className="w-full p-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg"
            />
            {errors.full_name && <p className="text-red-500 text-sm">{errors.full_name.message}</p>}
          </div>
          <div>
            <input
              {...register('age')}
              placeholder="Age"
              className="w-full p-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg"
            />
            {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
          </div>
          <div>
            <select {...register('gender')} className="w-full p-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
          </div>
          <div>
            <input
              {...register('blood_group')}
              placeholder="Blood Group"
              className="w-full p-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg"
            />
            {errors.blood_group && <p className="text-red-500 text-sm">{errors.blood_group.message}</p>}
          </div>
          <div>
            <input
              {...register('email')}
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div>
            <input
              {...register('club_name')}
              placeholder="Club Name (Optional)"
              className="w-full p-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg"
            />
          </div>

          {/* Event Details */}
          <div>
            <select {...register('solo')} className="w-full p-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg">
              <option value="">Solo Rider?</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            {errors.solo && <p className="text-red-500 text-sm">{errors.solo.message}</p>}
          </div>
          <div>
            <input
              {...register('state')}
              placeholder="State"
              className="w-full p-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg"
            />
            {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
          </div>
          <div>
            <input
              {...register('event_name')}
              value="Statehood Riders Meet Sikkim 2025"
              readOnly
              className="w-full p-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg"
            />
          </div>
          <div>
            <select {...register('food_preference')} className="w-full p-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg">
              <option value="">Food Preference</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Non-Vegetarian">Non-Vegetarian</option>
            </select>
            {errors.food_preference && <p className="text-red-500 text-sm">{errors.food_preference.message}</p>}
          </div>
          <div>
            <select {...register('tshirt_size')} className="w-full p-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg">
              <option value="">T-Shirt Size</option>
              {['Small', 'Medium', 'Large', 'XLarge', 'XXLarge'].map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
            {errors.tshirt_size && <p className="text-red-500 text-sm">{errors.tshirt_size.message}</p>}
          </div>

          {/* Motorcycle Details */}
          <div>
            <input
              {...register('motorcycle_model')}
              placeholder="Motorcycle Model"
              className="w-full p-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg"
            />
            {errors.motorcycle_model && <p className="text-red-500 text-sm">{errors.motorcycle_model.message}</p>}
          </div>
          <div>
            <input
              {...register('registration_number')}
              placeholder="Registration Number"
              className="w-full p-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg"
            />
            {errors.registration_number && <p className="text-red-500 text-sm">{errors.registration_number.message}</p>}
          </div>

          {/* Emergency Contact */}
          <div>
            <input
              {...register('emergency_contact_name')}
              placeholder="Emergency Contact Name"
              className="w-full p-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg"
            />
            {errors.emergency_contact_name && <p className="text-red-500 text-sm">{errors.emergency_contact_name.message}</p>}
          </div>
          <div>
            <input
              {...register('emergency_contact_number')}
              placeholder="Contact Number"
              className="w-full p-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg"
            />
            {errors.emergency_contact_number && <p className="text-red-500 text-sm">{errors.emergency_contact_number.message}</p>}
          </div>

          {/* Payment Details */}
          <div>
            <select {...register('payment_mode')} className="w-full p-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg">
              <option value="">Payment Mode</option>
              <option value="Online">Online</option>
            </select>
            {errors.payment_mode && <p className="text-red-500 text-sm">{errors.payment_mode.message}</p>}
          </div>
          <div>
            <select {...register('payment_status')} className="w-full p-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg">
              <option value="">Payment Status</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
            </select>
            {errors.payment_status && <p className="text-red-500 text-sm">{errors.payment_status.message}</p>}
          </div>
          <div>
            <input
              {...register('payment_ref_no')}
              placeholder="Payment Transaction ID"
              className="w-full p-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg"
            />
            {errors.payment_ref_no && <p className="text-red-500 text-sm">{errors.payment_ref_no.message}</p>}
          </div>
          <div>
            <input
              {...register('payment_details')}
              placeholder="Payment Details (Optional)"
              className="w-full p-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg"
            />
          </div>
        </div>

        {/* Terms and Conditions */} 
        <h4>Registration fee -  <span className='text-red-500'> ₹3000 only </span> </h4>
        <h4 className='text-green-500' >BYOT (Bring Your Own Tent)</h4>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            {...register('terms_and_conditions')}
            className="w-4 h-4 bg-zinc-800 border border-zinc-700 rounded"
          />
          <label className="text-white">I agree to the terms and conditions</label>
        </div>
        {errors.terms_and_conditions && <p className="text-red-500 text-sm">{errors.terms_and_conditions.message}</p>}
      
        <div className='flex flex-col space-y-4'>
          <Button
            type="button"
            onClick={() => setShowQRModal(true)}
          >
            Show QR Code for Payment
          </Button>

          <Button
            type="button"
            onClick={copyUPIId}
          >
            Copy UPI ID for Payment:
            <br />
            12411123@cbin
          </Button>
          
          <Button 
            type="button"
            className="!bg-green-500 text-white" 
            onClick={() => {
              window.open("https://chat.whatsapp.com/LwCb8wZpTEw5oVi1swqoCG", "_blank");
            }}
          > 
            Drop the payment screenshot here 📲  
          </Button>

          <Button 
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Registration'}
          </Button>
        </div>
      </form>

      {showQRModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowQRModal(false)}>
          <div 
            className="bg-zinc-800 rounded-lg p-4 relative"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowQRModal(false)}
              className="absolute right-2 top-2 text-white hover:text-gray-300 p-2 text-lg"
            >
              ✕
            </button>
            <Image
              src={qr}
              alt="QR Code"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
