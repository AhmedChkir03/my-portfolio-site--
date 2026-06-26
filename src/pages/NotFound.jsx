import { StarBackground } from "../components/StarBackground";

export const NotFound = () => {
  return (
    <div className="min-h-screen text-center relative overflow-hidden">
      <StarBackground />
      <div className="relative z-10 pt-32 px-4">
        <p className="text-base font-semibold text-primary">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-foreground sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-foreground/70 sm:text-xl/8 max-w-2xl mx-auto">
          Sorry, we could not find the page you were looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/#hero"
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-xs hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Go back home
          </a>
          <a
            href="/#contact"
            className="text-sm font-semibold text-foreground"
          >
            Contact support <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};
