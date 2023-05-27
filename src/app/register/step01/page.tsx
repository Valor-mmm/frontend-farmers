"use client";

import { useEffect, useState } from "react";

import {
  Grid,
  Box,
  FormControl,
  FormLabel,
  TextField,
  Checkbox,
  Stack,
  FormControlLabel,
  Button,
} from "@mui/material";

import dynamic from "next/dynamic";
import { useShop } from "../../../hooks/useShop";
import { useRouter } from "next/navigation";

const AddressInput = dynamic(() => import("../../../components/addressInput"), {
  ssr: false,
});

export default function RegisterOnePage() {
  const [name, setName] = useState<string>();
  const [organic, setOrganic] = useState(false);
  const [ecoPackaging, setEcoPackaging] = useState(false);
  const [address, setAddress] = useState<{ lat: number; lng: number }>();
  const [isClient, setIsClient] = useState(false);
  const { addShop } = useShop();
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, organic, ecoPackaging, address);
    addShop({
      name,
      location: {
        longitude: address?.lng,
        latitude: address?.lat,
      },
    }).then((shopId) => {
      router.push(`/register/step02?fId=${shopId}`);
    });
  };

  return (
    <main style={{ width: "100%", height: "100%", padding: "0 8px 8px 8px" }}>
      <h1>Welcome to Shop Green</h1>
      <h2>Give us all your data!</h2>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: "70%" }}>
              Welcome to ShopGreen!
              <br />
              We need some information about your shop, to let you register in
              our platform.
              <br />
              First we need s few informations to set up your farm profile. Note
              that all information will be publicly visible to the consumers.
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl>
              <FormLabel>Shop Name:</FormLabel>
              <TextField
                variant="outlined"
                placeholder="The name of your shop"
                value={name}
                onChange={(event) => {
                  setName(event?.target?.value);
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: "70%" }}>
              Add your address that consumers know where to find you.
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            {isClient && <AddressInput updateAddress={setAddress} />}
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: "70%" }}>
              Please specify if you meet this special criteria.
              <br />
              Hint: You do not have to meet these criterias, but consumers can
              filter for these preferences.
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={4}>
              <Stack>
                <FormControl>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={organic}
                        onChange={(event) => {
                          setOrganic(event?.target?.checked);
                        }}
                      />
                    }
                    label="Organic Products"
                  />
                </FormControl>
                <Box sx={{ maxWidth: "70%" }}>
                  This applies if you are offering min one product which is
                  grown and produced without the use of synthetic chemicals,
                  such as pesticides, fertilizers, genetically modified
                  organisms (GMOs), antibiotics, or growth hormones
                </Box>
              </Stack>
              <Stack>
                <FormControl>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={ecoPackaging}
                        onChange={(event) => {
                          setEcoPackaging(event?.target?.checked);
                        }}
                      />
                    }
                    label="Eco Friendly Packaging"
                  />
                </FormControl>
                <Box sx={{ maxWidth: "70%" }}>
                  This applies if your are offering refillable containers and/or
                  make use of sustainable materials like recycled or
                  biodegradable materials for packaging.
                </Box>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={8} md={10} display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              style={{ minWidth: "150px" }}
              onClick={handleSubmit}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </form>
    </main>
  );
}
