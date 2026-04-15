import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


export default function FooterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
    return (
        <Box>
            <Typography
                variant="body1"
                sx={{
                    fontWeight: 600,
                    mb: 1.5,
                }}
            >
                {title}
            </Typography>

            <Box component="nav" aria-label={title}>
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                    {children}
                </ul>
            </Box>
        </Box>
    );
}