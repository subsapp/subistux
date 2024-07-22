import { Box, Avatar } from "@radix-ui/themes";
import { IoReturnUpBack } from "react-icons/io5";

interface Props {
  initialSize?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | undefined;
  label?: boolean;
}
const Online = ({ label = true, initialSize = "2" }: Props) => {
  return (
    <Box className="relative">
      <Avatar
        size={{ initial: initialSize, lg: "3" }}
        src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
        radius="full"
        fallback="T"
      />
      {label ? (
        <Box
          className="bg-green-500 rounded-full absolute bottom-0 outline-white outline-1 outline right-0"
          width="10px"
          height="10px"
        ></Box>
      ) : (
        <div className="bg-black rounded-full text-red-900 opacity-1  absolute bottom-0 p-2 right-0 w-3 h-3 flex justify-center">
          <IoReturnUpBack color="white" size={40} />
        </div>
      )}
    </Box>
  );
};

export default Online;
