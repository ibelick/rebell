type ComponentBlockProps = {
  children: React.ReactNode;
  componentName?: string;
};

export const BASE_URL_CODE = `https://github.com/ibelick/rebell/blob/main/components`;

const ComponentBlock: React.FC<ComponentBlockProps> = ({
  children,
  componentName,
}) => {
  return (
    <div className="bg-neutral-50 p-10 rounded-md flex justify-center gap-4 border border-neutral-200 relative">
      {componentName ? (
        <a
          className="no-underline absolute top-2 right-2 rounded-md bg-neutral-200 text-neutral-600 py-1 px-2 hover:bg-neutral-200/75 cursor-pointer"
          href={`${BASE_URL_CODE}/${componentName}/index.tsx`}
          target="_blank"
          rel="noreferrer"
        >
          code
        </a>
      ) : null}
      <>{children}</>
    </div>
  );
};

export default ComponentBlock;
