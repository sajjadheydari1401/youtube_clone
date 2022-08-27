import React from "react";
import { Stack } from "@mui/material";

import { Loader } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
    </Stack>
  );
};

export default Videos;
