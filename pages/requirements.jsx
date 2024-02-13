import styles from "./requirements.module.scss";
import WrapperLayout from "@/app/wrapperLayout";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });

export default function RequirementsPage() {
  return (
    <section id="requirements" className={styles.requirementsPage}>
      <WrapperLayout>
        <div className={styles.requirementsHeader}>
          <h3 className={bebas.className}>Can My Computer Run this game?</h3>
          <h1 className={bebas.className}>system requirements</h1>
        </div>
        <table className={styles.requirementsTable}>
          <tbody>
            <tr>
              <td>
                <h3 className={bebas.className}>OS:</h3>
                <p>Windows 7 64-bit only (No OSX support at this time)</p>
              </td>
              <td>
                <h3 className={bebas.className}>PROCESSOR:</h3>
                <p>Intel Core 2 Duo @ 2.4 GHZ or AMD Athlon X2 @ 2.8 GHZ</p>
              </td>
            </tr>
            <tr>
              <td>
                <h3 className={bebas.className}>MEMORY:</h3>
                <p>8 GB RAM</p>
              </td>
              <td>
                <h3 className={bebas.className}>storage:</h3>
                <p>8 GB available space</p>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <h3 className={bebas.className}>GRAPHICS:</h3>
                <p>
                  NVIDIA GeForce GTX 660 2GB or AMD Radeon HD 7850 2GB DirectX11
                  (Shader Model 5)
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </WrapperLayout>
    </section>
  );
}
