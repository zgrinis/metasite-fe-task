type LoadingBoundaryProps = {
  isLoading: boolean;
  fallback: React.ReactNode;
};

export default function LoadingBoundary({
  children,
  isLoading,
  fallback,
}: React.PropsWithChildren<LoadingBoundaryProps>) {
  if (isLoading) {
    return fallback;
  }

  return children;
}
