interface GalleryCardProps {
  src: string;
  className: string;
  children?: React.ReactNode;
}

export const GalleryCard = ({ src, className, children }: GalleryCardProps) => (
  <div className={`overflow-hidden rounded-[20px] relative ${className}`}>
    <img src={src} className="w-full h-full object-cover" />
    {children && (
      <div className="absolute inset-0 flex justify-center items-center">
        {children}
      </div>
    )}
  </div>
);
