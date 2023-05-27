"use client";

import React, { useState } from "react";
import { Card, CardMedia, Stack, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
// import queryString from "query-string";

import { useRouter } from "next/navigation";

const ImageGrid = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  //   const router = useRouter();

  const Item = styled("div")({
    display: "flex",
    alignItems: "left",
    justifyContent: "left",
  });

  const images = [
    {
      url: "/eggs.svg",
      label: "Eggs",
      id: "egg",
    },
    {
      url: "/dairy.svg",
      label: "Milk",
      id: "milk",
    },
    {
      url: "/meat.svg",
      label: "Meat",
      id: "meat",
    },
    {
      url: "/dairy_products.svg",
      label: "Dairy Products",
      id: "dairy_products",
    },
    {
      url: "/vegetables.svg",
      label: "Vegetables",
      id: "vegetables",
    },
    {
      url: "/fruit.svg",
      label: "Fruits",
      id: "fruits",
    },
    // Add more image URLs and labels here
  ];

  const GridContainer = styled("div")({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingTop: "16px",
    paddingLeft: "15px",
    paddingRight: "15px",
  });

  interface CardContainerProps {
    isSelected: true;
  }

  const CardContainer = styled(Card)<CardContainerProps>(({ isSelected }) => ({
    width: "calc(16% - 15px)", // 3 images per row, with 15px spacing between cards
    marginBottom: "16px",
    border: isSelected ? "2px solid green" : "2px solid white", // Add custom border styles for selected images
    cursor: "pointer",
    transition: "border-color 0.3s ease",
    "&:hover": {
      borderColor: "green",
    },
  }));

  const Media = styled(CardMedia)({
    height: 0,
    paddingTop: "100%", // 1:1 aspect ratio (square image)
  });

  const handleImageClick = (image) => {
    const isSelected = selectedImages.some(
      (selectedImage) => selectedImage.url === image.url
    );

    if (isSelected) {
      setSelectedImages(
        selectedImages.filter(
          (selectedImage) => selectedImage.url !== image.url
        )
      );
    } else {
      setSelectedImages([...selectedImages, image]);
    }
    console.log(selectedImages);
  };

  const handleSubmit = () => {
    // Handle the form submission here
    console.log("Form submitted!");
    console.log(selectedImages);

    // const qs = queryString.stringify(
    //   {
    //     selectedCategory: selectedImages.map((image) => image.id)
    //   },
    //   { arrayFormat: "comma" }
    // );
    // console.log("QS", qs);

    // router.push(`/mapPage?${qs}`);
  };

  return (
    <GridContainer>
      <Stack spacing={1} width="100%">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h3> Select Categories</h3>
        </div>
        <GridContainer>
          {images.map((image, index) => (
            <CardContainer
              key={index}
              isSelected={selectedImages.some(
                (selectedImage) => selectedImage.url === image.url
              )}
              onClick={() => handleImageClick(image)}
            >
              <Stack>
                <Media image={image.url} />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <a>{image.label}</a>
                </div>
              </Stack>
            </CardContainer>
          ))}
        </GridContainer>
        <div
          style={{
            display: "flex",
            alignItems: "right",
            justifyContent: "right",
          }}
        >
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </Stack>
    </GridContainer>
  );
};

export default ImageGrid;
