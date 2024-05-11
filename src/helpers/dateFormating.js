import { format } from 'date-fns';

export const dateFormating = data => {
  return format(new Date(data), 'Pp');
};
