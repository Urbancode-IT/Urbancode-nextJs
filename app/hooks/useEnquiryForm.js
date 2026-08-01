import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Swal from 'sweetalert2';

export function useEnquiryForm({
  schema,
  defaultValues,
  onSubmitCallback
}) {
  const [loadTime, setLoadTime] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setLoadTime(Date.now());
  }, []);

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues,
    mode: 'onChange' // Real-time validation
  });

  const { handleSubmit, formState: { errors } } = form;


  const onSubmit = async (data) => {
    if (isSubmitting) return;

    // Honeypot check
    if (data.honeypot) {
      console.warn("Spam detected via honeypot.");
      return; // Silent failure for bots
    }

    // Minimum submission time (2 seconds)
    const timeToSubmit = Date.now() - loadTime;
    if (timeToSubmit < 2000) {
      Swal.fire({
        icon: 'warning',
        title: 'Suspicious Activity',
        text: 'Please complete the form properly.',
        confirmButtonColor: '#036c2d'
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmitCallback(data, form.reset);
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.message || "Something went wrong. Please try again.",
        confirmButtonColor: '#d33'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    ...form,
    isSubmitting,
    submitHandler: handleSubmit(onSubmit)
  };
}
