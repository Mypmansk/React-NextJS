import Image from "next/image";
import logo from "../public/logo.svg";

export default function Logo(props) {
  return (
    <Image
      src={logo}
      height={props.ImageHeight}
      width={props.ImageWidth}
      alt="logo"
    />
  );
}
