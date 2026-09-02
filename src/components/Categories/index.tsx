import { categories } from "../../mocks/categories";
import { Button } from "../Button";
import { useRouter } from "@tanstack/react-router";

export const Categories = () => {
  const router = useRouter();
  return (
    <section className="container flex gap-2.5 lg:grid lg:grid-cols-4 lg:gap-6 mb-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
      {categories.map((category, index) => (
        <div
          key={index}
          className="h-125 bg-center bg-cover rounded-[20px] relative flex justify-center items-center shrink-0 w-[95%] 
                    md:w-1/2 lg:w-full snap-center"
          style={{ backgroundImage: `url(${category.image})` }}
        >
          <div className="absolute inset-0 bg-black/30 rounded-[20px]" />

          <div className="relative">
            <Button
              variant="secondary"
              onClick={() =>
                router.navigate({
                  to: "/products/category/$category",
                  params: { category: category.name.toLowerCase() },
                })
              }
            >
              {category.name}
            </Button>
          </div>
        </div>
      ))}
    </section>
  );
};
