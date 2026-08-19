import React from "react";
import { Drawer, Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import StatusCard from "./StatusCard";
import TrustScore from "./TrustScore";
import SecurityChecks from "./SecurityChecks";

export default function ResultPanel({ open, onClose, result }) {
  return (
    <Drawer anchor="right" open={!!open} onClose={onClose}>
      <Box sx={{ width: 360, padding: 2 }} role="presentation">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">Analysis Result</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        {!result && (
          <Typography sx={{ mt: 2 }}>
            No result yet — run an analysis.
          </Typography>
        )}

        {result && (
          <Box sx={{ mt: 2 }}>
            <StatusCard status={result.status} />
            <TrustScore score={result.score} />
            <SecurityChecks checks={result.checks} />
          </Box>
        )}
      </Box>
    </Drawer>
  );
}
