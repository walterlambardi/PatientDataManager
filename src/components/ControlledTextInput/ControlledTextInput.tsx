import React from 'react';
import { TextInput, HelperText } from 'react-native-paper';
import styles from './controlledTextInput.style';
import { Control, Controller, FieldError } from 'react-hook-form';
import { TextInput as RNTextInput } from 'react-native';

interface ControlledTextInputProps {
  control: Control<any>;
  errors: FieldError | undefined;
  fieldName: string;
  inputRef: React.RefObject<RNTextInput>;
  isSubmitting?: boolean;
  label?: string;
  numberOfLines?: number;
  onSubmitEditing?: () => void;
  placeholder?: string;
  isTextAreaInput?: boolean;
}

const ControlledTextInput: React.FC<ControlledTextInputProps> = ({
  control,
  errors,
  fieldName,
  inputRef,
  isSubmitting = false,
  label,
  numberOfLines = 1,
  onSubmitEditing,
  placeholder,
  isTextAreaInput = false,
}) => {
  return (
    <Controller
      name={fieldName}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <>
          <TextInput
            ref={inputRef}
            mode="outlined"
            numberOfLines={numberOfLines}
            onBlur={onBlur}
            onChangeText={onChange}
            placeholder={placeholder}
            style={isTextAreaInput ? styles.textAreaInput : styles.textInput}
            value={value}
            label={label}
            error={!!errors}
            disabled={isSubmitting}
            outlineStyle={
              !errors ? styles.outlineStyle : styles.outlineErrorStyle
            }
            onSubmitEditing={onSubmitEditing}
          />
          <HelperText type="error" visible={!!errors} style={styles.helperText}>
            This field is required!
          </HelperText>
        </>
      )}
    />
  );
};

export default ControlledTextInput;
