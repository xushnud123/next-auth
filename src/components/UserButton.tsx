import avatarPlaceholder from "@/assets/images/avatar_placeholder.png";
import { Lock, LogOut, Settings } from "lucide-react";
import { User } from "next-auth";
import Link from "next/link";

import AnimatedTooltip from "./ui/animated-tooltip";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { signOut } from "@/auth";
import Image from "next/image";

interface UserButtonProps {
  user: User;
}

export default function UserButton({ user }: UserButtonProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="w-10 min-w-10 cursor-pointer rounded-full border border-white/[0.5]">
          <Image
            src={user.image || avatarPlaceholder}
            alt={user.name || ""}
            width={40}
            height={40}
            className="h-10 w-10 min-w-10 rounded-full object-cover"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{user.name || "User"}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/settings">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>
          {/* TODO: Show this only for admins */}
          {user?.role === "admin" && (
            <DropdownMenuItem asChild>
              <Link href="/admin">
                <Lock className="mr-2 h-4 w-4" />
                Admin
              </Link>
            </DropdownMenuItem>
          )}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          {/* TODO: Add a logout functionality */}
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button type="submit" className="flex w-full items-center">
              <LogOut className="mr-2 h-4 w-4" /> Sign Out
            </button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
