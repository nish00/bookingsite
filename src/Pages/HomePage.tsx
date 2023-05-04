import { Box } from '@mui/material';

export default function HomePage(){
    return (
        <Box
        component="img"
        sx={{
          height: '100vh',
          width: '100vw',
          objectFit: 'cover'
        }}
        alt="travel image"
        src="https://images.unsplash.com/photo-1515404929826-76fff9fef6fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
      />
    );
}