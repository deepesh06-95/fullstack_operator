import { Box, Container, Paper } from "@material-ui/core";
export const Home=()=>{
    return (
        <Container>
        <Paper>
        <Box sx={{ color: 'error.main' }}><h1>Welcome to operator vehicle management system</h1></Box>
        </Paper>
        </Container>
    );
}