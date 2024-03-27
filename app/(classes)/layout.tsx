export default function ClassLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="p-24">{children}</div>;
}
