import { formatDistanceToNow } from 'date-fns';

export const dateToNow = data => {
  return formatDistanceToNow(new Date(data), { addSuffix: true });
};
