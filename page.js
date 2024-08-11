"use client"
import{Box,Stack, Typography, Button} from '@mui/material'
import { doc, Firestore, getDocs } from 'firebase/firestore'
import { collection } from 'firebase/firestore'
import { useEffect, useState } from 'react'

const style = {
  position: 'absolute', 
  top: '50',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display:flex,
  flexDirection:'column',
};
const [pantry, setPantry] = useState[[]]
const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [itemName,setItemName]=  useState[[]]

export default function Home() {
  useEffect(()=> {
    const updatePantry = async () => {
      const snapshot = query(collection(Firestore,'pantry'))
      const docs = await getDocs(snapshot)
      const pantrylist=[]
      docs.forEach((doc)=>{
        pantrylist.push(doc.id)
        
      })
      console.log(pantrylist)

      }
      updatePantry(pantrylist)
      setPantry(pantrylist)
        
      });


  return (
    <Box
   height="100vh"
   width="100vw"
   display={'flex'}
   justifyContent={'center'}
   flexDirection={'column'}
   alignItems={'center'}
   gap={'2'}

   >
    <Button variant="contained" onClick={handleOpen}>Add</Button>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add item
          </Typography>
          <Stack width="100%" direction={'row'} spacing={2}>
          <TextField id="outlined-basic" label="item" variant="outlined">
            <Button variant="outlined">search</Button>
          </TextField>
          </Stack>
        </Box>
      </Modal>
    <Box border={'1px solid #333'}>
    <Box width="800px" height="100px" bgcolor={"#ADD8E6"}> "bgcolor":unknown word
      <Typography variant='{h2}' color={'#333'} textAlign={'center'}>
      Pantry Items
      </Typography>
    <Stack></Stack>
      </Box>

    <Stack width="800px" height="200px" spacing ={2} overflow={'scroll'}>
    {pantry.map((i) => (
      <Box
      key={i}
      width="100%"
      height="100px"
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}  
      bgcolor={'#f0f0f0'}
      
  >
    <Typography variant={'h3'} color={'#333'} textAlign={'center'} fontWeigh={'bold'}>
    {
      i.charAt(0).toUpperCase()+i.slice(1)
    }
    </Typography>
    </Box>
    ))}
    </Stack>
    </Box>
    </Box>
  )
}