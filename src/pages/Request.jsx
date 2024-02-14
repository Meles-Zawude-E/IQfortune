import { useRef, useState } from "react";
import { TextField, Button, Typography, Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
export default function Request() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [selectedItem, setSelectedItem] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cydevlu', 'template_ersm2cw', e.target, {
        publicKey: 'LKvK1f9wXESHkymre',
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


  const dropdownItems = [
    { label: "White pea bean", value: "whitePeaBean" },
    { label: "Red kidney bean", value: "redKidneyBean" },
    { label: "Soy bean", value: "soyBean" },
    { label: "Chickpea", value: "chickpea" },
    { label: "White kidney bean", value: "whiteKidneyBean" },
    { label: "Pigeon bean", value: "pigeonBean" },
    { label: "Green mung bean", value: "greenMungBean" },
    { label: "Red speckled bean", value: "redSpeckledBean" },
    { label: "Whitish humera sesame seed", value: "whitishSesameSeed" },
    { label: "Pinto beans", value: "pintoBeans" },
    { label: "Peanut", value: "peanut" },
    { label: "Turmeric finger", value: "turmericFinger" },
    { label: "Black cumin", value: "blackCumin" },
    { label: "Long pepper", value: "longPepper" },
    { label: "Linseed/flaxseed", value: "linseedFlaxseed" },
  ];

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
           Request Sample
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
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              name="from_eamil"
              required
            />

            <TextField
              fullWidth
              label="Phone"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              margin="normal"
              required
              name="phone"
              type="phone"
            />

            <FormControl fullWidth>
              <InputLabel id="select-item-label">Select Item</InputLabel>
              <Select
                labelId="select-item-label"
                id="select-item"
                value={selectedItem}
                label="Sample Item"
                onChange={(e) => setSelectedItem(e.target.value)}
                margin="normal"
                required
              >
                {dropdownItems.map((item) => (
                  <MenuItem key={item.value} value={item.value}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

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
