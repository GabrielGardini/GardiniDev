// pages/rocketseat.tsx
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function RocketseatRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Redireciona após o carregamento da página
    window.location.href = "https://www.rocketseat.com.br/oferta/influencer/v2/gardinidev";
  }, []);

  return (
    <></>
  );
}
