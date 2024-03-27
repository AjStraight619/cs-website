export const SectionDivider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base leading-6 font-semibold tracking-wide">
            {children}
          </h2>
        </div>
      </div>
    </div>
  );
};
