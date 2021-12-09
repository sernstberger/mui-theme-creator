import { Box, Divider, Typography } from "@mui/material";

const Layout = ({ title, children }: any) => {
  return (
    <>
      <Box padding={3}>
        <Typography variant="h4">{title}</Typography>
        {children}
      </Box>
      <Divider />
    </>
  );
};

export default Layout;
