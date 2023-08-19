"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Stack } from "@mui/material";

type Inputs = {
  search: string;
  searchRequired: string;
};

export default function Search() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <Box
      flex={1}
      width={"100%"}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack alignItems={"center"} flexDirection={"row"}>
        {/* register your input into the hook by invoking the "register" function */}
        <Box
          component="input"
          sx={{
            flexGrow: "1",
            border: ".5px solid gray",
            borderRadius: "30px",
            py: "10px",
            px: "8px",
            bgcolor: "#F5F5F9",
          }}
          placeholder="Search softwares"
          {...register("search")}
        />

        <SearchIcon type="submit" sx={{ ml: "-40px" }} />
      </Stack>
    </Box>
  );
}
