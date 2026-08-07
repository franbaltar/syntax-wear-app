// Este componente exibe uma galeria de produtos utilizando um grid responsivo.
// Cada card representa um produto ou modelo, com destaque para o principal.
// O overlay do card principal exibe informações e botões de ação.
import galeriaHomem from "../../assets/images/galeria-homem.jpg";
import galeriaTenisRoxo from "../../assets/images/galeria-tenis-roxo.jpg";
import galeriaModelo from "../../assets/images/galeria-modelo.jpg";
import galeriaTenisColorido from "../../assets/images/galeria-tenis-colorido.jpg";
import galeriaTenisBrancoPeto from "../../assets/images/galeria-tenis-branco-e-preto.jpg";
import galeriaTenisCinza from "../../assets/images/galeria-tenis-cinza.jpg";
import styles from "./Gallery.module.css";

// Componente principal da galeria
export const Gallery = () => {
  return (
    // Container principal da galeria
    <div className="container">
      {/* Grid da galeria, definido pelo CSS Modules */}
      <div className={styles.galleryGrid}>
        {/* Highlight - Modelo Masculino (galeria-homem.jpg) */}
        {/* Card de destaque com overlay e botões */}
        <div className={`${styles.imageCard} ${styles.highlight}`}>
          <img
            src={galeriaHomem}
            alt="Krypton One - Estilo urbano com atitude"
          />
          <div className={styles.overlay}>
            <div className={styles.textContent}>
              <p className={styles.productName}>Krypton One</p>
              <p className={styles.productDescription}>
                Estilo urbano com atitude
              </p>
            </div>
            <div className={styles.buttonGroup}>
              <button className={styles.button}>Feminino</button>
              <button className={styles.button}>Masculino</button>
            </div>
          </div>
        </div>

        {/* Sneaker Purple - Tênis Roxo (galeria-tenis-roxo.jpg) */}
        {/* Card do tênis roxo */}
        <div className={`${styles.imageCard} ${styles.sneakerPurple}`}>
          <img src={galeriaTenisRoxo} alt="Tênis Roxo" />
        </div>

        {/* Model - Modelo Feminina (galeria-modelo.jpg) */}
        {/* Card da modelo feminina */}
        <div className={`${styles.imageCard} ${styles.model}`}>
          <img src={galeriaModelo} alt="Modelo Feminina" />
        </div>

        {/* Sneaker Color - Tênis Colorido (galeria-tenis-colorido.jpg) */}
        {/* Card do tênis colorido */}
        <div className={`${styles.imageCard} ${styles.sneakerColor}`}>
          <img src={galeriaTenisColorido} alt="Tênis Colorido" />
        </div>

        {/* Sneaker White - Tênis Branco e Preto (galeria-tenis-branco-e-preto.jpg) */}
        {/* Card do tênis branco e preto */}
        <div className={`${styles.imageCard} ${styles.sneakerWhite}`}>
          <img src={galeriaTenisBrancoPeto} alt="Tênis Branco e Preto" />
        </div>

        {/* Sneaker Silver - Tênis Cinza (galeria-tenis-cinza.jpg) */}
        {/* Card do tênis cinza */}
        <div className={`${styles.imageCard} ${styles.sneakerSilver}`}>
          <img src={galeriaTenisCinza} alt="Tênis Cinza" />
        </div>
      </div>
    </div>
  );
};
