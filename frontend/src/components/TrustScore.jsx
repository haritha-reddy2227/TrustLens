import { Box, Typography, CircularProgress } from "@mui/material";

function TrustScore({ score }) {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: 3,
      }}
    >
      <CircularProgress
        variant="determinate"
        value={score}
        size={150}
        thickness={6}
      />

      <Typography variant="h3" sx={{ marginTop: -12 }}>
        {score}
      </Typography>

      <Typography variant="body1" sx={{ marginTop: 10 }}>
        Trust Score
      </Typography>
    </Box>
  );
}

export default TrustScore;
