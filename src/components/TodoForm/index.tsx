import { FC } from 'react';
import { useDispatch } from 'react-redux';

import { Formik, Form, Field, ErrorMessage, FieldProps } from 'formik';

import { Grid } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { addTask } from 'stor/tasks/tasksSlice';
import { Task, TodoFormValues } from 'types/tasks';
import { Status } from 'types/enums/status';

import { validationSchema } from './schema';

import {
  AddTaskButton,
  CancelButton,
  DateInput,
  EditButtonsContainer,
  EditTaskButton,
  ErrorText,
  Input,
  Label,
} from './style';

const initialValues = {
  title: '',
  description: '',
  deadline: null,
};

interface TodoFormProps {
  formValues?: TodoFormValues;
  isEdit?: boolean;
  onEdit?: (values: TodoFormValues) => void;
  onCancel?: () => void;
}

const TodoForm: FC<TodoFormProps> = ({ formValues = initialValues, isEdit, onEdit, onCancel }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values: TodoFormValues, { resetForm }: { resetForm: () => void }) => {
    const newTask: Task = {
      id: Date.now(),
      status: Status.PENDING,
      ...values,
    };

    if (isEdit && onEdit) {
      onEdit(values);
    } else {
      dispatch(addTask(newTask));
    }

    resetForm();
  };

  return (
    <Formik initialValues={formValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Label>
                Title <sup>*</sup>
              </Label>
              <Field name='title' as={Input} fullWidth required placeholder='Title' />
              <ErrorMessage name='title'>{(msg) => <ErrorText>{msg}</ErrorText>}</ErrorMessage>
            </Grid>
            <Grid item xs={12}>
              <Label>Description</Label>
              <Field name='description' as={Input} fullWidth placeholder='Description' />
            </Grid>
            <Grid item xs={12}>
              <Label>Deadline</Label>
              <Field name='deadline' fullWidth>
                {({ field, form }: FieldProps<TodoFormValues>) => (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateInput
                      {...field}
                      onChange={(newValue) => form.setFieldValue('deadline', newValue)}
                      disablePast
                    />
                  </LocalizationProvider>
                )}
              </Field>
            </Grid>

            {isEdit ? (
              <Grid item xs={12}>
                <EditButtonsContainer>
                  <EditTaskButton type='submit' disabled={!values.title}>
                    Save
                  </EditTaskButton>

                  <CancelButton type='button' onClick={onCancel}>
                    Cancel
                  </CancelButton>
                </EditButtonsContainer>
              </Grid>
            ) : (
              <Grid item xs={12}>
                <AddTaskButton type='submit' disabled={!values.title}>
                  Add Task
                </AddTaskButton>
              </Grid>
            )}
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default TodoForm;
