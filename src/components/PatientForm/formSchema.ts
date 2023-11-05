import * as yup from 'yup';

export const patientSchema = yup
  .object({
    avatar: yup.string().url().required(),
    description: yup.string().required(),
    name: yup.string().required(),
    website: yup.string().url().required(),
  })
  .required();

export type FormData = yup.InferType<typeof patientSchema>;
