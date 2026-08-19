import { Box, Typography, List, ListItem, ListItemIcon } from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import WarningIcon from "@mui/icons-material/Warning";

function SecurityChecks({ checks = {} }) {
  const https = !!checks.https;
  const suspiciousKeywords = !!checks.suspiciousKeywords;
  const suspiciousCharacters = !!checks.suspiciousCharacters;

  return (
    <Box>
      <Typography variant="h6">Security Checks</Typography>

      <List>
        <ListItem>
          <ListItemIcon>
            {https ? <CheckCircleIcon /> : <WarningIcon />}
          </ListItemIcon>

          <Typography>HTTPS</Typography>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            {!suspiciousKeywords ? <CheckCircleIcon /> : <WarningIcon />}
          </ListItemIcon>

          <Typography>Suspicious Keywords</Typography>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            {!suspiciousCharacters ? <CheckCircleIcon /> : <WarningIcon />}
          </ListItemIcon>

          <Typography>Suspicious Characters</Typography>
        </ListItem>
      </List>
    </Box>
  );
}

export default SecurityChecks;
