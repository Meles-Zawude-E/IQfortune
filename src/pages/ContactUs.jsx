import { useRef, useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

export default function ContactUs() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vipc1gi', 'template_qu82b3n', e.target, {
        publicKey: 'Asoe8Yx9sDEGDwJyw',
      })
      .then(
        
        () => {
          console.log('SUCCESS!');
          Swal.fire({
            icon:'success',
            title:'message sent successfully'
          })
        },
       
        (error) => {
          console.log('FAILED...', error.text);
          Swal.fire({
            icon:'error',
            title:'Ooops something want wrong',
            text:error.text
          })
        },
      );
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
          <Typography variant="h4" align="center" mb={2}>
            Contact Us For Your Inquiries
          </Typography>
          <form ref={form} onSubmit={sendEmail}>
            <TextField
              fullWidth
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
              name="from_name"
              required
            />
            <TextField
              fullWidth
              label="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              name="user_email"
              required
            />
            <TextField
              fullWidth
              label="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              margin="normal"
              name="message"
              required
              multiline
              rows={4}
            />
            <Button variant="contained" type="submit" sx={{ mt: 2 }}>
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
}
