import Head from "next/head";
import { useQuery } from "react-query";
import { getAllCurrencyPair } from "src/server";
import { Box, Container, Grid, Pagination } from "@mui/material";
import { ProductCard } from "../components/product/product-card";
import { DashboardLayout } from "../components/dashboard-layout";
import { CurrencyPairToolbar } from "src/components/product/currency-pair-toolbar";

const CurrencyPair = () => {
  const { data, isLoading } = useQuery("currencypairs", getAllCurrencyPair);
  return (
    <>
      <Head>
        <title>Elink Admin | Elink Currency Pair</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <CurrencyPairToolbar />
          <Box sx={{ pt: 3 }}>
            <Grid container spacing={3}>
              {data &&
                data.pairs.map((pair) => (
                  <Grid item key={pair._id} lg={4} md={6} xs={12}>
                    <ProductCard product={pair} />
                  </Grid>
                ))}
            </Grid>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pt: 3,
            }}
          >
            <Pagination color="primary" count={3} size="small" />
          </Box>
        </Container>
      </Box>
    </>
  );
};

CurrencyPair.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default CurrencyPair;
