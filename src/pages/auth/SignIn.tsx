import { Box, Button, Flex, Text } from "@radix-ui/themes";
import logo from "../../assets/logo.svg";
import { useForm } from "react-hook-form";
import { FormEvent } from "react";
// import { useNavigate } from "react-router-dom";

type FormData = {
  register: string;
};
const Signin = () => {
  // const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    // reset,
    // handleSubmit,
  } = useForm<FormData>();
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center h-full w-full px-2">
      
      <Flex
        direction={{ initial: "column" }}
        className="items-center w-full bg-white max-w-[800px] rounded-xl p-3 lg-p-8"
        align="center"
        gap="4"
      >
        <Box>
          <div className="flex items-center justify-between">
            <Text size={{ initial: "5", lg: "7" }}>Sign in</Text>
            <img width={190} src={logo} alt="logo" />
          </div>
          <Text weight="bold" size={{ initial: "4", lg: "6" }}>
            Make the internet fun again.
          </Text>
        </Box>
        <Box>
          <form className="space-y-4" onSubmit={(e) => onSubmit(e)}>
            <div className="flex flex-col">
              <input
                className="h-12 p-4 rounded mb-4 lg-mb-8 border border-blue-400 outline-blue-400"
                {...register("register", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email",
                  },
                })}
                placeholder="Email"
                autoFocus
              />
              <a className="text-blue-500" href="#">Forgot email?</a>
            </div>
            <Box>
              {errors.register?.type === "required" && (
                <Text color="red">{errors.register?.message}</Text>
              )}
              {errors.register?.type === "pattern" && (
                <Text color="red">{errors.register.message}</Text>
              )}
            </Box>
            <Flex gap="8" justify="end" align="center" className="mt-8">
              <a href="#" className="text-blue-500">Create account</a>
              <Button
                type="submit"
                size={{ initial: "3", lg: "4" }}
                radius="full"
              >
                Next
              </Button>
            </Flex>
          </form>
        </Box>
      </Flex>
    </div>
  );
};

export default Signin;
