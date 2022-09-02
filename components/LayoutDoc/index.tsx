import Link from "next/link";
import { useRouter } from "next/router";

type LayoutDocProps = {
  children: React.ReactNode;
};

const MENU = [
  {
    component: "Button",
    path: "/button",
  },
  {
    component: "Input",
    path: "/input",
  },
  {
    component: "Textarea",
    path: "/textarea",
    isSoon: true,
  },
  { component: "Switch", path: "/switch", isSoon: true },
];

const LayoutDoc: React.FC<LayoutDocProps> = ({ children }) => {
  return (
    <main className="min-h-screen">
      <div className="max-w-2xl px-4 mx-auto my-10 xs:px-8 lg:max-w-6xl">
        <div className="flex gap-8">
          <div className="flex-1 basis-2/12 h-full sticky top-10">
            <Menu />
          </div>
          <div className="flex-1 basis-10/12">
            <article className="prose max-w-full">{children}</article>
          </div>
        </div>
      </div>
    </main>
  );
};

const Menu = () => {
  const router = useRouter();

  return (
    <nav className="border border-neutral-200 rounded-md shadow-sm bg-white w-full">
      <ul className="list-none">
        {MENU.map((item) => {
          return (
            <li>
              <Link href={item.path}>
                <a
                  className={`flex py-4 px-4 ${
                    item.isSoon
                      ? `pointer-events-none text-neutral-500/50`
                      : `text-neutral-600`
                  } ${item.path === router.pathname ? `` : ``}`}
                >
                  <span className="flex-1">{item.component}</span>
                  {item.isSoon ? <Badge>SOON</Badge> : ``}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

type BadgeProps = {
  children: React.ReactNode;
};

const Badge: React.FC<BadgeProps> = ({ children }) => {
  return (
    <span className="px-2 py-1 text-xs rounded-md bg-fuchsia-50 text-fuchsia-300 font-medium">
      {children}
    </span>
  );
};

export default LayoutDoc;
