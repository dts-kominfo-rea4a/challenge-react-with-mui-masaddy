// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  TextField,
} from "@mui/material";
import { useState } from "react";

const ContactForm = (props) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState("");

  const inputOnChangeHandler= (event) => {
    if(event.target.id == "name") setName(event.target.value);
    else if(event.target.id == "email") setEmail(event.target.value);
    else if(event.target.id == "phone") setPhone(event.target.value);
    else if(event.target.id == "photo") setPhoto(event.target.value);
  };

  const formOnSubmitHandler = (event) => {
    event.preventDefault();

    const newdata = {
        name: name,
        email: email,
        phone: phone,
        photo: photo
    };

    console.log(newdata);
    props.fnAddNew(newdata);

    setName("");
    setEmail("");
    setPhone("");
    setPhoto("");

    // setData({
    //     name: null,
    // phone: null,
    // email: null,
    // photo: null,
    // });
    // Panggil props fnAddTodos
    // props.fnAddTodos(inputData);
    // Kosongkan lagi input
    // setData('');
  };

  return (
    <form onSubmit={formOnSubmitHandler}>
      <Card variant="outlined" sx={{ m: 2, p: 2 }}>
        <CardContent>
          <TextField
            id="name"
            label="Name*"
            variant="outlined"
            sx={{ m: 1 }}
            value={name}
            onChange={inputOnChangeHandler}
          />
          <TextField
            id="phone"
            label="Phone*"
            variant="outlined"
            sx={{ m: 1 }}
            value={phone}
            onChange={inputOnChangeHandler}
          />
          <TextField
            id="email"
            label="Email*"
            variant="outlined"
            sx={{ m: 1 }}
            value={email}
            onChange={inputOnChangeHandler}
          />
          <TextField
            id="photo"
            label="Photo URL**"
            variant="outlined"
            sx={{ m: 1 }}
            value={photo}
            onChange={inputOnChangeHandler}
          />
        </CardContent>
        <CardActionArea>
          <Button type="submit" variant="contained" size="large">
            Add New
          </Button>
        </CardActionArea>
      </Card>
    </form>
  );
};

export default ContactForm;
