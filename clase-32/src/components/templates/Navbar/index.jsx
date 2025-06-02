import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Badge,
  Tooltip,
} from "@mui/material";
import ChairIcon from "@mui/icons-material/Chair";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const Navbar = () => {
  return (
    <Box>
      <AppBar>
        <Toolbar>
          <IconButton size="large">
            <ChairIcon fontSize="large" />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button variant="standard" color="inherit">
              Home
            </Button>
            <Button variant="standard" color="inherit">
              Contacto
            </Button>
            <Tooltip title="Seccion de productos">
              <Button variant="standard" color="inherit">
                Tienda
              </Button>
            </Tooltip>
          </Box>

          <Badge badgeContent={4} color="secondary">
            <ShoppingCartIcon color="action" />
          </Badge>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
