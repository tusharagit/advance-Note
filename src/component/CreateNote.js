import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function NoteForm() {

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column', // Stack items vertically
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh', // full screen height
      }}
    >
      <Card sx={{ minWidth: 275, margin: 'auto' }}  elevation={8}> {/* Added margin for auto for vertical alignment */}
        <CardContent>
          <Typography variant="h5" component="div" sx={{ marginBottom: '20px' }}>
            New Note
          </Typography>
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column', // Added for vertical alignment
              alignItems: 'center',
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              id="note-title"
              label="Note Title"
              variant="outlined"
              name="title"
              type={'text'}
            />
            <TextField
              required
              id="note-data"
              label="Note Data"
              multiline
              rows={4}
              variant="outlined"
              name="description"
              type={'text'}
            />
            <Button type="submit" variant="contained" sx={{ m: 1 }}>
              Save
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}