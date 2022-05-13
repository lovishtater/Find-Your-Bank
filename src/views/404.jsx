import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import Error from "../assets/404.gif"

const ErrorPage = () => {
  console.log("hello")
  return (
    <main style={{ backgroundColor: "#F1F4F9" }}>
      <img src={Error} alt="404" 
      style={{ width: "50%", marginBottom: "2rem", marginTop: "2rem" }} 
      />
    
      <Link to="/">
        <Button variant="outlined" color="primary">
          Go to Home
        </Button>
      </Link>
    </main>
  );
}

export default ErrorPage