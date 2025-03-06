export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      ROOT
      <main className="wrapper flex-1">{children}</main>
    </div>
  );
}
