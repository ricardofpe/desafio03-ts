import { Box, Button, Center, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { api } from "../api";


interface UserData {
    email: string;
    password: string;
    name: string;
    balance: number;
    id: string;
  }

const ContaInfo = () => { 

    const [userData, setUserData] = useState<null | UserData>();


    useEffect(() => {
        const getData = async () => {
          const data: any | UserData = await api;
          setUserData(data);
        };
    
        getData();
      }, []);
    return (
        <>
          

            <Box textAlign='center' display='flex' flexDirection='column' padding='5px' backgroundColor='white' margin='auto' marginTop='50px' borderRadius='10px' maxWidth='400px'>

<Text fontSize='3xl' fontWeight='bold'>
    Informações da conta
</Text>


<Text>Nome: {userData?.name}</Text>
<Text>Email: {userData?.email}</Text>
<Text>Balance: { userData?.balance}</Text>


</Box>

            <Center margin='20px'>
            <Link to='/conta/1'>
    <Button fontSize='xl'>
       Voltar para a Conta
    </Button>
</Link>
            </Center> 

           
          
           
        </>
    )
}

export default ContaInfo
