import styles from "./wrapperLayout.module.scss";
import cn from "classnames";

export default function WrapperLayout({ children, mode, style }) {
  let stylesWrapper;
  switch (mode) {
    case "header":
      stylesWrapper = styles.wrapperHeader;
      break;
    case "footer":
      stylesWrapper = styles.wrapperFooter;
      break;
    default:
      stylesWrapper = styles.wrapper;
  }
  return <div className={cn(stylesWrapper, style)}>{children}</div>;
}
