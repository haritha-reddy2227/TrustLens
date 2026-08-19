import { Card, CardContent, Typography } from "@mui/material";

function StatusCard({ status }) {
  let color = "warning";

  if (status === "GENUINE") {
    color = "success";
  }

  if (status === "PHISHING") {
    color = "error";
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" color={`${color}.main`} textAlign="center">
          {status}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default StatusCard;
