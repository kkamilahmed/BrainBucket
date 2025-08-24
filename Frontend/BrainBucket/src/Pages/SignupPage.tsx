import { SignupBox } from "../components/signupbox";
import { ModeToggle } from "../components/mode-toggle";
import { ThemeProvider } from "../components/theme-provider";
import img from "../assets/loginbg.png";

export function SignupPage() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <img
        src={img}
        alt="Background"
        className="fixed inset-0 w-full h-full object-cover"
      />
      <div className="fixed inset-0 bg-black/50" />

      <div className="fixed inset-0 flex justify-center items-center">
        <SignupBox />
        <div className="absolute top-4 right-4">
          <ModeToggle />
        </div>
      </div>
    </ThemeProvider>
  );
}
