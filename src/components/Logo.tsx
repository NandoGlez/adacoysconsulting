import logo from "@/assets/adacoys-logo.png";

const Logo = () => {
  return (
    <div className="w-full flex justify-center py-6 md:py-8">
      <img 
        src={logo} 
        alt="Adacoys Consulting Logo" 
        className="h-16 md:h-20 w-auto object-contain"
      />
    </div>
  );
};

export default Logo;
