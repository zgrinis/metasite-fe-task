import {
  Card,
  Skeleton,
  CardMedia,
  CardContent,
  Box,
  Typography,
  Grid,
  Link,
} from "@mui/material";

type ContactCardProps = {
  isContactLoading: boolean;
  contact: Contact | undefined;
};

export default function ContactCard({
  isContactLoading,
  contact,
}: ContactCardProps) {
  const cardHeading = isContactLoading
    ? undefined
    : `${contact?.name} ${contact?.surname?.charAt(0)?.concat(".")}`;
  return (
    <Card>
      {isContactLoading ? (
        <>
          <Skeleton
            sx={{ height: 190 }}
            animation="wave"
            variant="rectangular"
          />
        </>
      ) : (
        <>
          <CardMedia
            component="img"
            src={"/images/userpic.png"}
            alt={cardHeading}
          />
        </>
      )}
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {isContactLoading ? (
          <>
            <Box sx={{ width: 300 }}>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
            </Box>
          </>
        ) : (
          <>
            <Typography variant="h5" textAlign={"center"}>
              {cardHeading}
            </Typography>
            <Grid
              container
              sx={{
                color: "#757575",
                "& :nth-child(odd)": { textAlign: "right", paddingRight: 3 },
                "& :nth-child(even)": { paddingLeft: 3 },
              }}
            >
              <Grid size={6}>Name:</Grid>
              <Grid size={6}>{contact?.name}</Grid>
              <Grid size={6}>City:</Grid>
              <Grid size={6}>{contact?.city}</Grid>
              <Grid size={6}>Email:</Grid>
              <Grid size={6}>
                <Link href={`mailto:${contact?.email}`} underline="always">
                  {contact?.email}
                </Link>
              </Grid>
              <Grid size={6}>Phone:</Grid>
              <Grid size={6}>{contact?.phone}</Grid>
            </Grid>
          </>
        )}
      </CardContent>
    </Card>
  );
}
