import styles from "./socials.module.scss";
import FacebookIcon from "./SocialBars/facebookIcon";
import TwitchIcon from "./SocialBars/twitchIcon";
import TwitterIcon from "./SocialBars/twitterIcon";
import YoutybeIcon from "./SocialBars/youtybeIcon";
import Link from "next/link";

export default function Socials() {
  return (
    <div className={styles.socials}>
      <Link href="/popup">
        <FacebookIcon width={25} height={25} />
      </Link>
      <Link href="/popup">
        <TwitchIcon width={25} height={25} />
      </Link>
      <Link href="/popup">
        <TwitterIcon width={25} height={25} />
      </Link>
      <Link href="/popup">
        <YoutybeIcon width={25} height={25} />
      </Link>
    </div>
  );
}
