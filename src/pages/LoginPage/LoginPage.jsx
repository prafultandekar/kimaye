

import { Button, Checkbox, Flex, Heading,Box,Link, Stack ,FormControl,FormLabel,Input,Text,useColorModeValue} from '@chakra-ui/react'
import React from 'react'
import { useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

function LoginPage() {

    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")
    const navigate = useNavigate();


    useEffect(() => {
        if (localStorage.getItem("user-info")) {
          navigate("/LoginPage");
        }
      }, [navigate]);
    

const login = async ()=>{

    try{
        console.log(email,password);

        let data = { email,password };
        console.log(data)

        let data1 = await fetch("http://localhost:8080/logindata",{

        method: "POST",

        headers: {
            "content-type": "application/json",
            Accept: "application/json",
        },
        body:JSON.stringify(data)
        })
        console.log(data1)

        if(data1 == 400){
            alert("Invalid Email or Password")
        }
        else{
            data1 = await data1.json()
            localStorage.setItem("user-info",JSON.stringify(data1))
            alert("login succesful")
        }
    }
    catch(err){
        console.log(err)
    }
};

  return (
    <div>

   <Flex 
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}>

        <Stack spacing={8} mx={"auto"} maxH={"lg"} py={12} px={6}>

            <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <p>features</p> ✌️
            </Text>
            </Stack>
            <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  id="email"
                  onChange={(e) => setemail(e.target.value)}
                  type="email"
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  id="password"
                  onChange={(e) => setpassword(e.target.value)}
                  type="password"
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link to="/signupform">Forgot password?</Link>
                </Stack>
                {/* <Link to="/loginform"> */}{" "}
                <Button
                  onClick={login}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign in
                </Button>
                {/* </Link> */}
              </Stack>
            </Stack>
          </Box>


        </Stack>
    
   </Flex>









    </div>
  )
}

export default LoginPage