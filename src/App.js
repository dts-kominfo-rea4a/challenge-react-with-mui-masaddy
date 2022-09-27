import { Button, Card, Grid } from "@mui/material";
import { useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
import d from "./data/contacts.json";

// Uncomment untuk memuat daftar kontak
// import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const [dataContacts, setDataContacts] = useState(d);


  const addNew = (data) => {
    const newContact = [...dataContacts, data];
    console.log(newContact);
    setDataContacts(newContact);
  };

  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={12}>
            <Header />
        </Grid>
        <Grid item xs={6}>
          <ContactForm fnAddNew={addNew}/>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <Contact data={dataContacts}></Contact>
          <Button onClick={() => console.log(dataContacts)}>Tsetts</Button>
          </Card>
          
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
