import { TextFieldProps } from '@mui/material';
import { useState } from 'react';
import { splitTags } from '../utils';

export const useTags = (name: string): TextFieldProps & { value: string } => {
  const [value, setValue] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return {
    margin: 'normal',
    variant: 'standard',
    multiline: true,
    fullWidth: true,
    maxRows: 10,
    placeholder: 'Example: tag-1,tag-2,tag-3',

    label: `${name} (${splitTags(value).length})`,
    value,
    onChange,
  };
};
