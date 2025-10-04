import React from 'react';
import { Checkbox } from '../Checkbox/Checkbox';
import type { CheckboxProps } from '../Checkbox/Checkbox';

export function CheckboxDemo(props: CheckboxProps) {
  const [checked, setChecked] = React.useState(false);
  return (
    <Checkbox
      label="Acepto los términos"
      checked={checked}
      onChange={e => setChecked(e.target.checked)}
      {...props}
    />
  );
}
