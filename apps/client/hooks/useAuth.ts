import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export function useAuth() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const isAuthenticated = status === "authenticated";
  const isLoading = status === "loading";
  const user = session?.user;

  const login = async (email: string, password: string) => {
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        return { success: false, error: result.error };
      }

      router.refresh();
      return { success: true };
    } catch (error) {
      return { success: false, error: "An unexpected error occurred" };
    }
  };

  const logout = async () => {
    await signOut({ redirect: false });
    router.push("/login");
    router.refresh();
  };

  return {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
  };
}
