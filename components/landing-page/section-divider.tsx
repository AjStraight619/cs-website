export const SectionDivider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="leading-6 font-poppins tracking-wide text-xl">
            {children}
          </h2>
        </div>
      </div>
    </div>
  );
};
