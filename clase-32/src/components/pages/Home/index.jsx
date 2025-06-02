import {
  Button,
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Modal,
  Tooltip,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <h2 style={{ color: "red" }}>Buttons</h2>
      <Button variant="text" color="primary">
        Boton
      </Button>
      <Button variant="outlined" color="secondary">
        Boton
      </Button>
      <Button variant="contained" color="error">
        Boton
      </Button>

      <h2>TextField</h2>
      <TextField variant="outlined" placeholder="Texfield" />
      <TextField variant="standard" placeholder="Texfield" />
      <TextField variant="filled" placeholder="Texfield" />

      <h2>Select</h2>
      <Box sx={{ width: "200px" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <h2>Button Group</h2>
      <ButtonGroup variant="outlined" aria-label="Basic button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <h2>Tarjetas</h2>
      <Card
        sx={{
          width: "300px",
        }}
      >
        <CardHeader title="Receta de Asado" subheader="Robert Dawne Jr" />
        <CardMedia
          component={"img"}
          height={"200"}
          width={"200"}
          image="https://picsum.photos/200/200"
        />
        <CardContent>
          <Tooltip title="Esta es una receta">
            <h2>Muffins</h2>
          </Tooltip>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel quam
            aut placeat, optio, itaque aliquam dolorum beatae facilis labore
            esse ex blanditiis numquam sint accusantium neque, ratione nobis
            doloremque amet!
          </p>
          <Button>Ingredientes</Button>
          <Button variant="contained" onClick={() => setOpenModal(true)}>
            Ver Receta
          </Button>
        </CardContent>
      </Card>

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h4" color="primary" sx={{ mb: 2 }}>
              Receta de Pavo
            </Typography>
            <img
              src="https://picsum.photos/200/200"
              alt=""
              style={{ width: "200px", height: "200px" }}
            />
            <Typography variant="p" sx={{ mt: 2 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              mollitia id incidunt quae asperiores nostrum est. Ad nulla ipsum
              est blanditiis a ipsa animi vitae. Saepe magni ab odio harum!
            </Typography>
            <Button variant="contained">Cocinar</Button>
          </div>
        </Box>
      </Modal>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <CircularProgress size={100} color="primary" />
        <CircularProgress size={100} color="secondary" />
        <CircularProgress size={100} color="warning" />
        <CircularProgress size={100} color="error" />
      </div>
    </div>
  );
};
