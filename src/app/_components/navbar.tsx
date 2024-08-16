"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "../../utils/uploadthing";
import { LeUploadButton } from "../_components/upload-button";

export function NavBar() {
  const router = useRouter();
    

    return (
      <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold border-b">
        <div>Gallery</div>
        <div className="flex flex-row gap-4 items-center">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <LeUploadButton />
            <UserButton />
          </SignedIn>
          </div>
      </nav>
    )
  }