type LayoutDocProps = {
  children: React.ReactNode;
};

const LayoutDoc: React.FC<LayoutDocProps> = ({ children }) => {
  return <div className="prose">{children}</div>;
};

export default LayoutDoc;
