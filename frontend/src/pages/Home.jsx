import { useState } from "react";

import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
  Paper,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import TrustScore from "../components/TrustScore";

import StatusCard from "../components/StatusCard";

import SecurityChecks from "../components/SecurityChecks";

import ResultPanel from "../components/ResultPanel";

import { analyzeWebsite } from "../services/securityApi";

function Home() {
  const [url, setUrl] = useState("");

  const [result, setResult] = useState(null);

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleAnalyze = async () => {
    try {
      setLoading(true);

      const data = await analyzeWebsite(url);

      setResult(data);
      setOpen(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ marginTop: 5 }}>
        <Typography variant="h3" textAlign="center">
          🔍 TrustLens
        </Typography>

        <Typography textAlign="center" color="text.secondary">
          Website Trust & Phishing Detection
        </Typography>

        <Paper sx={{ padding: 3, marginTop: 4 }}>
          <TextField
            fullWidth
            label="Enter website URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />

          <Button
            fullWidth
            variant="contained"
            startIcon={<SearchIcon />}
            sx={{ marginTop: 2 }}
            onClick={handleAnalyze}
            disabled={loading}
          >
            {loading ? "Analyzing..." : "Analyze Website"}
          </Button>
        </Paper>

        <ResultPanel
          open={open}
          onClose={() => setOpen(false)}
          result={result}
        />
      </Box>
    </Container>
  );
}

export default Home;
