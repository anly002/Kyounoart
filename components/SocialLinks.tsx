type IconProps = { className?: string };

const XIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
    <path d="M18.244 2H21l-6.52 7.45L22 22h-6.78l-4.79-6.27L4.8 22H2.04l6.99-7.99L2 2h6.93l4.33 5.73L18.244 2Zm-2.38 18.2h1.88L7.22 3.7H5.2L15.864 20.2Z" />
  </svg>
);

const InstagramIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const EmailIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

const SOCIALS = [
  { name: "X", href: "https://x.com/kyounoart?s=21&t=X_fxvjxxnFdTX_w4Zr2LcQ", Icon: XIcon },
  { name: "Instagram", href: "https://www.instagram.com/_an_yly?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr", Icon: InstagramIcon },
  { name: "Email", href: "mailto:anthonyly42@gmail.com", Icon: EmailIcon },
] as const;

type Props = {
  className?: string;
  iconClassName?: string;
  linkClassName?: string;
  gapClassName?: string;
};

export default function SocialLinks({
  className = "",
  iconClassName = "h-6 w-6",
  linkClassName = "text-white/90 hover:text-white",
  gapClassName = "gap-8",
}: Props) {
  return (
    <ul className={`flex items-center ${gapClassName} ${className}`}>
      {SOCIALS.map(({ name, href, Icon }) => (
        <li key={name}>
          <a
            href={href}
            aria-label={name}
            className={`inline-flex items-center justify-center transition-colors ${linkClassName}`}
          >
            <Icon className={iconClassName} />
          </a>
        </li>
      ))}
    </ul>
  );
}
