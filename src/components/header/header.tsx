import Link from "next/link";
import { Avatar, AvatarIcon, Tooltip } from "@nextui-org/react";
import {
  LogOut,
  Settings,
  AlignRight,
  FileBarChart,
  CreditCard,
  BadgeDollarSign,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header: React.FC = () => {
  return (
    <>
      <header className="w-screen h-16 to-[#9377EF] from-[#6e4ed6] bg-gradient-to-r px-10 flex justify-between items-center">
        <h1 className="text-white font-bold text-xl">Loan</h1>
        <nav className="hidden lg:flex gap-20">
          <ul className="flex gap-2">
            <Link
              href="/deposito"
              className="px-5 text-white font-medium py-2 hover:bg-[#3d106572] duration-400 rounded-lg"
            >
              Deposito
            </Link>
            <Link
              href="/pix"
              className="px-5 text-white font-medium py-2 hover:bg-[#3d106572] duration-400 rounded-lg"
            >
              Pix
            </Link>
            <Link
              href="/historico"
              className="px-5 text-white font-medium py-2 hover:bg-[#3d106572] duration-400 rounded-lg"
            >
              Histórico
            </Link>
          </ul>
          <div>
            <Tooltip
              placement="bottom"
              content={<Profile />}
              delay={0}
              className="bg-transparent shadow-none"
            >
              <Avatar
                icon={<AvatarIcon />}
                classNames={{
                  base: "bg-gradient-to-br to-[#25085e] from-[#985bf4] cursor-pointer",
                  icon: "text-white",
                }}
              />
            </Tooltip>
          </div>
        </nav>
        <nav className="flex lg:hidden">
          <Menu />
        </nav>
      </header>
    </>
  );
};

const Profile = () => {
  return (
    <>
      <ul className="bg-white w-64 shadow-lg rounded-lg">
        <li className="px-5 py-2">Guilherme Silva Fernandes</li>
        <div className="w-full border-b-2 border-slate-200" />
        <li className="flex items-center gap-2 px-5 py-2 cursor-pointer hover:bg-slate-100 duration-400">
          <Settings className="w-5" />
          <p>Configurações</p>
        </li>
        <li className="flex items-center gap-2 px-5 py-2 cursor-pointer hover:bg-slate-100 rounded-bl-lg rounded-br-lg duration-400">
          <LogOut className="w-5" />
          <p>Sair</p>
        </li>
      </ul>
    </>
  );
};

const Menu = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <AlignRight className="text-white w-10 h-10" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Guilherme Silva Fernandes</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <BadgeDollarSign className="mr-2 h-4 w-4" />
              <span>Pix</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Deposito</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FileBarChart className="mr-2 h-4 w-4" />
              <span>Histórico</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Configurações</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Sair</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default Header;
