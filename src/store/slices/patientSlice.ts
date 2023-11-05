import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import Config from 'react-native-config';
import { EndPoints } from '../../enums/endPoints';
import { Patient, PatientsData } from '../../types/api';

interface InitialState {
  patients: PatientsData;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  updateStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
}

export const resetUpdateStatus = createAction('patients/resetUpdateStatus');

export const fetchPatients = createAsyncThunk<PatientsData, void>(
  'patients/fetchPatients',
  async () => {
    try {
      const response = await fetch(`${Config.BASE_URL}${EndPoints.users}`);
      const json = await response.json();
      return json;
    } catch (error) {
      throw error;
    }
  },
);

export const updatePatient = createAsyncThunk<PatientsData, Partial<Patient>>(
  'patients/updatePatient',
  async (updatedFields, { getState }) => {
    const state = getState() as { patients: InitialState };

    const newPatients = state.patients.patients;

    const updatedPatients = newPatients.map(patient => {
      if (patient.id === updatedFields.id) {
        return { ...patient, ...updatedFields };
      } else {
        return patient;
      }
    });

    return updatedPatients;
  },
);

export const addPatient = createAsyncThunk<PatientsData, Partial<Patient>>(
  'patients/addPatient',
  async (patientData, { getState }) => {
    const state = getState() as { patients: InitialState };
    const updatedPatients = [...state.patients.patients];

    const newPatient = {
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      ...patientData,
    } as Patient;

    updatedPatients.push(newPatient);

    return updatedPatients;
  },
);

const patientSlice = createSlice({
  name: 'patients',
  initialState: {
    patients: [],
    status: 'idle',
    error: null,
    updateStatus: 'idle',
  } as InitialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPatients.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchPatients.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.patients = action.payload;
      })
      .addCase(fetchPatients.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      })
      .addCase(addPatient.pending, state => {
        state.updateStatus = 'loading';
      })
      .addCase(addPatient.fulfilled, (state, action) => {
        state.updateStatus = 'succeeded';
        state.patients = action.payload;
      })
      .addCase(addPatient.rejected, state => {
        state.updateStatus = 'failed';
      })
      .addCase(updatePatient.pending, state => {
        state.updateStatus = 'loading';
      })
      .addCase(updatePatient.fulfilled, (state, action) => {
        state.updateStatus = 'succeeded';
        state.patients = action.payload;
      })
      .addCase(updatePatient.rejected, state => {
        state.updateStatus = 'failed';
      })
      .addCase(resetUpdateStatus, state => {
        state.updateStatus = 'idle';
      });
  },
});

export default patientSlice.reducer;
