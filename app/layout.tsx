import type {Metadata as NextMetadata, Viewport} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {AntdRegistry} from "@ant-design/nextjs-registry";

const inter = Inter({subsets: ["latin"]});

interface MetaTag {
    name: string;
    content: string;
}

interface Metadata extends NextMetadata {
    meta?: MetaTag[];
}

export const metadata: Metadata = {
    title: "Phúc Khang Gems ",
    description: "PHÚC là phúc đức, hạnh phúc: đạt được nhiều điều tốt lành trong cuộc sống.\n" +
        "KHANG là khỏe mạnh.\n" +
        "ĐÁ PHONG THỦY PHÚC KHANG là sự kết hợp giữa ĐÁ và  PHONG THỦY mong mang đến cho người sở hữu luôn có sức khỏe, phúc lộc và nhiều may mắn trong cuộc đời.",
};
export const viewport: Viewport = {
    initialScale: 1,
    width: 'device-width',
    maximumScale: 1,
    userScalable: false
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <AntdRegistry>
            <body className={inter.className}>{children}</body>
        </AntdRegistry>
        </html>
    );
}
