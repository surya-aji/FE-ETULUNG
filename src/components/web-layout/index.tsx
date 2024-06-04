
import ScriptLayout from "./Script";
import FooterLayout from "./Footer";
import HeadLayout from "./Head";
import NavLayout from "./Nav";
import { useEffect, useState } from "react";


type Props = {
  children: React.ReactNode;
}

const WebLayout = (prop:Props) => {
  const children = prop.children

  return (

  <div>
    <HeadLayout />
    <NavLayout />
  {/* Navbar: End */}
  {/* Sections:Start */}
  <div data-bs-spy="scroll" className="scrollspy-example">
   {children}
  </div>
  {/* / Sections:End */}
  {/* Footer: Start */}
  <FooterLayout/>
  {/* Footer: End */}
  {/* Core JS */}
  <ScriptLayout/>
</div>

  
  );
};

export default WebLayout;