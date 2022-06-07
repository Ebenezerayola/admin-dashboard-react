import {
  Box,
  Card,
  Button,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Typography,
} from "@mui/material";
import { Download as DownloadIcon } from "../../icons/download";
import { Select, Form, Button as FormButton, Modal } from "antd";
import { useState } from "react";
import { Search as SearchIcon } from "../../icons/search";
import { Upload as UploadIcon } from "../../icons/upload";
import { CurrencyPairForm } from "../forms/CurrencyPairForm";

// const { Option } = Select;

export const CurrencyPairToolbar = (props) => {
  const [activeModal, setActiveModal] = useState(false);

  const addCurrency = () => {
    // alert(true)
  };

  return (
    <Box {...props}>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          m: -1,
        }}
      >
        <Typography sx={{ m: 1 }} variant="h4">
          Currency Pair
        </Typography>
        <Box sx={{ m: 1 }}>
          <Button color="primary" variant="contained" onClick={() => setActiveModal(true)}>
            Add currency pair
          </Button>
        </Box>
      </Box>
      <Modal
      title="Add Currency Pair"
      visible={activeModal}
      footer={null}
      onCancel={() => setActiveModal(false)}
      >
          <CurrencyPairForm />
      </Modal>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon fontSize="small" color="action">
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  ),
                }}
                placeholder="Search Currency"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};
