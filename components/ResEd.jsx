import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const ResEd = () => {
  const mediumArticle = [
    {
      id: 1,
      title: "PFP NFTs — what rights do they give you ?",
      description:
        "To help you understand rights associated with PFP NFTs, we decrypt licenses of three top PFP NFT projects.",
      imageURL: "https://cdn-images-1.medium.com/max/400/0*kDDbRnbeXWw7MRrl",
    },
    {
      id: 2,
      title: "Confused about your NFT rights ?",
      description:
        "To help you understand rights associated with PFP NFTs, we decrypt licenses of three top PFP NFT projects.",
      imageURL:
        "https://cdn-images-1.medium.com/max/400/1*7TCLBjFSypF8VlZS0HitGQ.png",
    },
    {
      id: 3,
      title: "Death of the NFT Artist",
      description:
        "To help you understand rights associated with PFP NFTs, we decrypt licenses of three top PFP NFT projects.",
      imageURL: "https://cdn-images-1.medium.com/max/400/0*yBv6PZWFaFHmsOjm",
    },
  ];

  return (
    <Box sx={{ textAlign: "center", mt: 12 }}>
      <Typography variant="h5">Get Educated</Typography>
      <Typography variant="body1">
        With Res Educate, get educated on NFT copyrights, IP rights and how to
        deal with NFT thefts.
      </Typography>
      <Box sx={{ py: 4 }}>
        <Grid container columnSpacing={2}>
          {mediumArticle.map((article) => {
            return (
              <Grid
                item
                sm={4}
                xs={12}
                key={article.id}
                sx={{ display: "flex" }}
              >
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={article.imageURL}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        {article.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {article.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Button
        variant="outlined"
        target="_blank"
        href="https://medium.com/resolutio-nft"
      >
        Read More
      </Button>
    </Box>
  );
};

export default ResEd;