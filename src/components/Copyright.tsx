import Typography from '@mui/material/Typography';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      Pony Website&nbsp;
      {new Date().getFullYear()}.
    </Typography>
  );
}
