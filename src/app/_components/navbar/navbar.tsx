"use client";
import { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
  transition,
} from "./navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex w-full items-center justify-center">
      <Navbar className="top-2">{children}</Navbar>
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed inset-x-0 top-10 z-50 mx-auto max-w-2xl rounded-[100px] border border-black/10 bg-slate-950 shadow",
        className,
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Umumiy">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Biz haqimizda</HoveredLink>
            <HoveredLink href="/interface-design">Hamkorlar</HoveredLink>
            <HoveredLink href="/seo">Yordam</HoveredLink>
            <HoveredLink href="/branding">Izohlar</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  grid grid-cols-2 gap-10 p-2 text-sm">
            <ProductItem
              title="Macbooks"
              href="https://algochurn.com"
              src="https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              description="Olib yurishga qulay va safar chog'ida quvvat umuman sizni havotirga solmaydi"
            />
            <ProductItem
              title="Windows"
              href="https://tailwindmasterkit.com"
              src="https://images.pexels.com/photos/19012054/pexels-photo-19012054/free-photo-of-king-of-fighters-xv-on-acer-predator-gaming-laptop-and-on-external-monitor.jpeg?auto=compress&cs=tinysrgb&w=800"
              description="Har qanday og'ir dasturlar va o'yinlarda endi qotishlar zavqni his qila olasiz"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        {/* <div
          onMouseEnter={() => setActive("sign-in")}
          className={cn(
            "duration-20 relative cursor-pointer rounded-full border border-transparent px-4 py-2 transition-all",
            active === "sign-in" && "border-black/10",
          )}
        >
          {children}
          {active !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={transition}
            >
              {active === "sign-in" && (
                <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500  to-transparent" />
              )}
            </motion.div>
          )}
        </div> */}
        {children}
      </Menu>
    </div>
  );
}
