import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    marginTop: theme.spacing(6),
    "& .MuiPagination-root": {
      "& .MuiPagination-ul": {
        justifyContent: "center",
        "& li": {
          "& .MuiButtonBase-root": {},
          "& .Mui-selected": {
            background: theme.palette.primary.main,
            color: "#fff",
          },
        },
      },
    },
  },
}));

const MyPagination = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Stack spacing={2}>
        <Pagination count={10} />
      </Stack>
    </section>
  );
};

export default MyPagination;
