import styles from "./socials.module.scss";
import FacebookIcon from "./SocialBars/facebookIcon";
import TwitchIcon from "./SocialBars/twitchIcon";
import TwitterIcon from "./SocialBars/twitterIcon";
import YoutybeIcon from "./SocialBars/youtybeIcon";

export default function Socials() {
  return (
    <div className={styles.socials}>
      <a>
        <FacebookIcon width={25} height={25} />
      </a>
      <a>
        <TwitchIcon width={25} height={25} />
      </a>
      <a>
        <TwitterIcon width={25} height={25} />
      </a>
      <a>
        <YoutybeIcon width={25} height={25} />
      </a>
    </div>
  );
}
