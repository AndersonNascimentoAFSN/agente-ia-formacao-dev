import { ChatButton } from "@/components";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen">
      {/* <Header /> */}
      {children}
      <ChatButton />
    </div>
  );
}