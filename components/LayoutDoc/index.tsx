type LayoutDocProps = {
  children: React.ReactNode;
};

const LayoutDoc: React.FC<LayoutDocProps> = ({ children }) => {
  return (
    <div className="max-w-2xl px-4 mx-auto my-10 prose xs:px-8 lg:max-w-3xl">
      <article className="prose">{children}</article>
    </div>
  );
};

export default LayoutDoc;
