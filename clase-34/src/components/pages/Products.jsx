import { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { config } from "../../config";
import axios from "axios";
import { CardProduct } from "../CardProduct";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetch = async () => {
    try {
      const url = `${config.VITE_API_URL}products`;
      const response = await axios.get(url);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false); // ✅ ¡Activamos el fin del loading!
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 5,
        justifyContent: "center",
      }}
    >
      {isLoading ? (
        <div
          style={{
            display: "flex",
            height: "500px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        products.map((product) => (
          <CardProduct id={product.id} key={product.id} />
        ))
      )}
    </Box>
  );
};
