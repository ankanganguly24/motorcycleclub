"use client";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { createClient } from '@supabase/supabase-js';
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
    payment_ref_no: z.string().optional(),
    payment_mode: z.enum(['Bank Transfer', 'Cash', 'Other']),
    payment_details: z.string().optional(),
    terms_and_conditions: z.boolean().refine((val) => val === true, 'You must agree to the terms and conditions'),
  });

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    try {
      const { error } = await supabase.from('registrations').insert([data]);
      
      if (error) {
        console.error('Error inserting data:', error.message);
        return;
      }
      
      console.log('Form submitted successfully:', data);
      alert('Registration successful!');
    } catch (err) {
      console.error('Unexpected error:', err);
    }
  };

  return (
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
            placeholder="Emergency Contact Number"
            className="w-full p-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg"
          />
          {errors.emergency_contact_number && <p className="text-red-500 text-sm">{errors.emergency_contact_number.message}</p>}
        </div>

        {/* Payment Details */}
        <div>
          <select {...register('payment_mode')} className="w-full p-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg">
            <option value="">Payment Mode</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="Cash">Cash</option>
            <option value="Other">Other</option>
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
            placeholder="Payment Reference Number (Optional)"
            className="w-full p-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg"
          />
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
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          {...register('terms_and_conditions')}
          className="w-4 h-4 bg-zinc-800 border border-zinc-700 rounded"
        />
        <label className="text-white">I agree to the terms and conditions</label>
      </div>
      {errors.terms_and_conditions && <p className="text-red-500 text-sm">{errors.terms_and_conditions.message}</p>}

      <button
        type="submit"
        className="w-full bg-primary hover:bg-opacity-80 text-white font-bold py-3 rounded-lg"
      >
        Submit Registration
      </button>
    </form>
  );
}
