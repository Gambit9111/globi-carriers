import React from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
};

const ApplicationForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    // Include the current date as the application date
    const applicationData = { ...data, applicationDate: new Date() };
    console.log(applicationData);
  };

  return (
    <div className="mx-auto mt-8 w-full max-w-md text-color-white">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm tracking-tighter">First Name</label>
          <input
            className="mt-1 block w-full rounded-md border border-gray-300 bg-color-graydark px-3 py-2 text-color-white shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500"
            type="text"
            {...register("firstName", { required: "First name is required" })}
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600 font-medium">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm tracking-tighter">Last Name</label>
          <input
            className="mt-1 block w-full rounded-md border border-gray-300 bg-color-graydark px-3 py-2 text-color-white shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500"
            type="text"
            {...register("lastName", { required: "Last name is required" })}
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-600 font-medium">
              {errors.lastName.message}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm tracking-tighter">Email</label>
          <input
            className="mt-1 block w-full rounded-md border border-gray-300 bg-color-graydark px-3 py-2 text-color-white shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500"
            type="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 font-medium">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm tracking-tighter">Phone</label>
          <input
            className="mt-1 block w-full rounded-md border border-gray-300 bg-color-graydark px-3 py-2 text-color-white shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500"
            type="text"
            {...register("phone", { required: "Phone is required" })}
          />
          {errors.address && (
            <p className="mt-1 text-sm text-red-600 font-medium">
              {errors.address.message}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm tracking-tighter">City</label>
          <input
            className="mt-1 block w-full rounded-md border border-gray-300 bg-color-graydark px-3 py-2 text-color-white shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500"
            type="text"
            {...register("city", { required: "City is required" })}
          />
          {errors.city && (
            <p className="mt-1 text-sm text-red-600 font-medium">{errors.city.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm tracking-tighter">Country</label>
          <input
            className="mt-1 block w-full rounded-md border border-gray-300 bg-color-graydark px-3 py-2 text-color-white shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500"
            type="text"
            {...register("country", { required: "Country is required" })}
          />
          {errors.country && (
            <p className="mt-1 text-sm text-red-600 font-medium">
              {errors.country.message}
            </p>
          )}
        </div>
        <div>
          <button
            className="w-full rounded-sm bg-color-yellow py-4 tracking-tighter text-color-black hover:bg-color-yellow/20 hover:text-color-white"
            type="submit"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
