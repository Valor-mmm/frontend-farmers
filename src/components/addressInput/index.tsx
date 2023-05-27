import { FormControl, FormLabel, Grid, TextField } from "@mui/material";
import { AddressAutofill } from "@mapbox/search-js-react";

export default function AddressInput({ updateAddress }) {
  return (
    <Grid container width="90%" spacing={3}>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <FormLabel>Street</FormLabel>
          <AddressAutofill
            onRetrieve={(result) => {
              const coordinates = result.features[0].geometry.coordinates;
              updateAddress({
                lng: coordinates[0],
                lat: coordinates[1],
              });
            }}
            accessToken={process.env.NEXT_PUBLIC_AUTOCOMPLETE_TOKEN}
          >
            <TextField
              style={{ maxWidth: "74%" }}
              fullWidth
              variant="outlined"
              autoComplete="address-line1"
            />
          </AddressAutofill>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl>
          <FormLabel>City</FormLabel>
          <TextField variant="outlined" autoComplete="address-level2" />
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <FormControl>
          <FormLabel>Zip Code</FormLabel>
          <TextField variant="outlined" autoComplete="postal-code" />
        </FormControl>
      </Grid>
    </Grid>
  );
}
