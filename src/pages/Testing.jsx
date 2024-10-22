
import { Mail } from '@mui/icons-material'
import { Badge, Box, Button, InputBase, styled, Typography } from '@mui/material'

const Btn = styled(Button)({
  backgroundColor: "purple"
})

// const SearchItem = styled("div")(({theme})) => ({

// })

const Testing = () => {
  return (
    <Box>
      <Btn variant="contained" color="primary" > Button Click </Btn>
      <Button variant="contained" color="primary" sx={{ paddingX: "100px" }} > Button Click </Button>
      <InputBase placeholder='type here now...' sx={{ border: "2px", bgcolor: "white" }}></InputBase>
      <Typography>This is just to check text</Typography> {/* Do we write all text in this? */}

      <Badge badgeContent={4} color="primary">
        <Mail color="action" />
      </Badge>
    </Box>
  )
}

export default Testing
