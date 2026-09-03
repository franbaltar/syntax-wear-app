import iconInstagram from "@/assets/images/icon-instagram.png";
import iconFacebook from "@/assets/images/icon-facebook.png";
import iconTikTok from "@/assets/images/icon-tiktok.png";
import iconWhatsapp from "@/assets/images/icon-whatsapp.png";

const socialLinks = [
  { href: "#", icon: iconInstagram, name: "Instagram" },
  { href: "#", icon: iconFacebook, name: "Facebook" },
  { href: "#", icon: iconTikTok, name: "TikTok" },
  { href: "#", icon: iconWhatsapp, name: "WhatsApp" },
];

export const SocialLinks = () => {
  return (
    <div>
      <p className="justify-center flex gap-8 mb-4 text-xl font-medium text-surface-alt">
        Redes Sociais
      </p>

      <ul className="justify-center flex gap-5 mb-4">
        {socialLinks.map(({ href, icon, name }) => (
          <li key={name}>
            <a href={href} aria-label={name} className="group">
              <img
                src={icon}
                alt={name}
                className="transition-[filter] group-hover:filter-[brightness(0)_saturate(100%)_invert(34%)_sepia(96%)_saturate(2500%)_hue-rotate(242deg)_brightness(94%)_contrast(91%)] duration-10"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
