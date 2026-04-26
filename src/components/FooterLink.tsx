import { Link } from "@mui/material";
import NextLink from "next/link";

export default function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
    return (
        <li style={{ marginBottom: 6 }}>
            <Link
                component={NextLink}
                href={href}
                underline="hover"
                color="text.secondary"
            >
                {children}
            </Link>
        </li>
    );
}