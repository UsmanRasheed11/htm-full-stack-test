import CustomFooter from "../footer/CustomFooter";
import CustomNavbar from "../navbar/CustomNavbar";

const CustomLayout = ({children}) => {
  return (
    <>
    <CustomNavbar />
    {children}
    <CustomFooter />
    </>
  )
}

export default CustomLayout;