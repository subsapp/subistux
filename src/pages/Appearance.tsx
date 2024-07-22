import { Box, Button, RadioGroup, Flex, Text } from "@radix-ui/themes";
import logo from "../assets/logo.svg";

const Appearance = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full px-2">

      <Flex
        direction={{ initial: "column" }}
        className="items-start w-full bg-white max-w-[800px] rounded-xl p-3 lg-p-8"
        align="center"
        gap="4"
      >
        <Box className="self-center">
          <div className="flex flex-col items-center  justify-between">
            <img className="w-60" src={logo} alt="logo" />
            <Text weight='bold' size={{initial:'6'}} >Make the internet fun again</Text>
          </div>
        </Box>
        <Box className="self-center">
          <form className=''>
            <Text weight='bold' size={{initial:'6'}} align='center'>Appearance</Text>
            <div>
            <input type="radio" id="html" name="fav_language" value="HTML"/>

              <label for="html">Light mode</label><br/>
              </div>
            <div>

            <img className="w-60" src={logo} alt="logo" />
            <input type="radio" id="html" name="fav_language" value="HTML"/>
              <label for="html">Dark mode</label><br/>
            </div>
              </form>
            </Box>
          </Flex>
        </div>
        );
};

        export default Appearance;
