"use client";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const contactSchema = z.object({
    fullName: z.string().min(2, 'Full Name must be at least 2 characters'),
    age: z.string().min(1, 'Age is required'),
    gender: z.enum(['Male', 'Female', 'Other']),
    bloodGroup: z.string().min(1, 'Blood Group is required'),
    email: z.string().email('Invalid email address'),
    clubName: z.string().optional(),
    solo: z.enum(['Yes', 'No']),
    state: z.string().min(2, 'State is required'),
    eventName: z.literal('Statehood Riders Meet Sikkim 2025'),
    foodPreference: z.enum(['Vegetarian', 'Non-Vegetarian']),
    tshirtSize: z.enum(['Small', 'Medium', 'Large', 'XLarge', 'XXLarge']),
    motorcycleModel: z.string().min(2, 'Motorcycle Model is required'),
    registrationNumber: z.string().min(2, 'Registration Number is required'),
    emergencyContactName: z.string().min(2, 'Emergency Contact Name is required'),
    emergencyContactNumber: z.string().min(10, 'Valid contact number is required'),
    paymentStatus: z.enum(['Paid', 'Pending']),
    paymentRefNo: z.string().optional(),
    paymentMode: z.enum(['Bank Transfer', 'Cash', 'Other']),
    paymentDetails: z.string().optional(),
    termsAndConditions: z.boolean().refine((val) => val === true, 'You must agree to the terms and conditions'),
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
        {/* Personal Information */}
        <div>
          <input
            {...register('fullName')}
            placeholder="Full Name"
            className="w-full p-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg"
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
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
            {...register('bloodGroup')}
            placeholder="Blood Group"
            className="w-full p-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg"
          />
          {errors.bloodGroup && <p className="text-red-500 text-sm">{errors.bloodGroup.message}</p>}
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
            {...register('clubName')}
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
            {...register('eventName')}
            value="Statehood Riders Meet Sikkim 2025"
            readOnly
            className="w-full p-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg"
          />
        </div>
        <div>
          <select {...register('foodPreference')} className="w-full p-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg">
            <option value="">Food Preference</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Non-Vegetarian">Non-Vegetarian</option>
          </select>
          {errors.foodPreference && <p className="text-red-500 text-sm">{errors.foodPreference.message}</p>}
        </div>
        <div>
          <select {...register('tshirtSize')} className="w-full p-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg">
            <option value="">T-Shirt Size</option>
            {['Small', 'Medium', 'Large', 'XLarge', 'XXLarge'].map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
          {errors.tshirtSize && <p className="text-red-500 text-sm">{errors.tshirtSize.message}</p>}
        </div>

        {/* Motorcycle Details */}
        <div>
          <input
            {...register('motorcycleModel')}
            placeholder="Motorcycle Model"
            className="w-full p-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg"
          />
          {errors.motorcycleModel && <p className="text-red-500 text-sm">{errors.motorcycleModel.message}</p>}
        </div>
        <div>
          <input
            {...register('registrationNumber')}
            placeholder="Registration Number"
            className="w-full p-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg"
          />
          {errors.registrationNumber && <p className="text-red-500 text-sm">{errors.registrationNumber.message}</p>}
        </div>

        {/* Emergency Contact */}
        <div>
          <input
            {...register('emergencyContactName')}
            placeholder="Emergency Contact Name"
            className="w-full p-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg"
          />
          {errors.emergencyContactName && <p className="text-red-500 text-sm">{errors.emergencyContactName.message}</p>}
        </div>
        <div>
          <input
            {...register('emergencyContactNumber')}
            placeholder="Emergency Contact Number"
            className="w-full p-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg"
          />
          {errors.emergencyContactNumber && <p className="text-red-500 text-sm">{errors.emergencyContactNumber.message}</p>}
        </div>

        {/* Payment Details */}
        <div>
          <select {...register('paymentMode')} className="w-full p-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg">
            <option value="">Payment Mode</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="Cash">Cash</option>
            <option value="Other">Other</option>
          </select>
          {errors.paymentMode && <p className="text-red-500 text-sm">{errors.paymentMode.message}</p>}
        </div>
        <div>
          <select {...register('paymentStatus')} className="w-full p-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg">
            <option value="">Payment Status</option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
          </select>
          {errors.paymentStatus && <p className="text-red-500 text-sm">{errors.paymentStatus.message}</p>}
        </div>
        <div>
          <input
            {...register('paymentRefNo')}
            placeholder="Payment Reference Number (Optional)"
            className="w-full p-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg"
          />
        </div>
        <div>
          <input
            {...register('paymentDetails')}
            placeholder="Payment Details (Optional)"
            className="w-full p-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg"
          />
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          {...register('termsAndConditions')}
          className="w-4 h-4 bg-zinc-800 border border-zinc-700 rounded"
        />
        <label className="text-white">I agree to the terms and conditions</label>
      </div>
      {errors.termsAndConditions && <p className="text-red-500 text-sm">{errors.termsAndConditions.message}</p>}

      <button
        type="submit"
        className="w-full bg-primary hover:bg-opacity-80 text-white font-bold py-3 rounded-lg"
      >
        Submit Registration
      </button>
    </form>
  );
}
