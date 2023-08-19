"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import MyButton from "../../global-ui/MyButton";
import { Box, Button } from "@mui/material";

type Inputs = {
  Email: string;
};

export default function EmailInput() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("Email")); // watch input value by passing the name of it

  return (
    <Box color={"#fff"} component="form" onSubmit={handleSubmit(onSubmit)}>
      {/* include validation with required or other standard HTML validation rules */}
      <Box sx={{ fontWeight: "500" }}>Email</Box>
      <Box
        component="input"
        sx={{
          borderRadius: ".5rem",
          marginY: ".5rem",
          width: "100%",
          px: "1rem",
          py: ".8rem",
        }}
        {...register("Email", { required: true })}
      />
      {/* errors will return when field validation fails  */}
      <Box> {errors.Email && <span>This field is required</span>}</Box>
      <Button
        variant="contained"
        sx={{
          marginY: ".5rem",
          px: "1.4rem",
          borderRadius: "30px",
          color: "#000",
          textTransform: "capitalize",
          bgcolor: "#FFBC00",
          "&:hover": { bgcolor: "#ffee4e" }, // Make sure the color value is correct
        }}
        onClick={handleSubmit(onSubmit)}
      >
        Get 10% Off
      </Button>
    </Box>
  );
}
