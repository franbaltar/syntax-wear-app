import banner from "@/assets/images/card_imagem.jpg";
import tenisRoxo from "@/assets/images/galeria-tenis-roxo.jpg";
import tenisCinza from "@/assets/images/galeria-tenis-cinza.jpg";
import tenisBrancoEPreto from "@/assets/images/galeria-tenis-branco-e-preto.jpg";
import tenisColorido from "@/assets/images/galeria-tenis-colorido.jpg";
import modelo from "@/assets/images/galeria-modelo.jpg";
import { Button } from "../Button";
import { GalleryCard } from "../GalleryCard";
import { Overlay } from "../Overlay";
import { useRouter } from "@tanstack/react-router";

export const Gallery = () => {
  const router = useRouter();
  return (
    <section className="container grid grid-cols-12 gap-2.5 md:gap-7 mb-10 grid-rows-[200px_1fr_100px] md:grid-rows-none">
      <GalleryCard
        src={banner}
        className="col-span-12 md:col-span-6 row-span-3 order-1"
      >
        <Overlay
          subtitle="Estilo urbano com atitude."
          className="inset-0 justify-center items-center"
        >
          <Button
            variant="secondary"
            onClick={() =>
              router.navigate({
                to: "/products/category/$category",
                params: { category: "feminino" },
              })
            }
          >
            Feminino
          </Button>
          <Button
            variant="secondary"
            onClick={() =>
              router.navigate({
                to: "/products/category/$category",
                params: { category: "masculino" },
              })
            }
          >
            Masculino
          </Button>
        </Overlay>
      </GalleryCard>

      <GalleryCard
        src={tenisRoxo}
        className="col-span-12 row-span-1 md:col-span-6 order-5 md:order-2"
      />
      <GalleryCard
        src={modelo}
        className="col-span-6 md:col-span-3 row-span-6 order-3"
      />
      <GalleryCard
        src={tenisColorido}
        className="col-span-6 md:col-span-3 row-span-3 order-4"
      />
      <GalleryCard
        src={tenisBrancoEPreto}
        className="col-span-12 md:col-span-6 row-span-4 order-2 md:order-5"
      />
      <GalleryCard
        src={tenisCinza}
        className="col-span-6 md:col-span-3 row-span-3 order-4 md:order-6"
      />
    </section>
  );
};
