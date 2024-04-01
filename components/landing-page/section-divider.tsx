export const SectionDivider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mb-12 h-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="leading-loose font-roboto_condensed tracking-tight text-5xl">
            {children}
          </h2>
        </div>
      </div>
    </div>
  );
};
