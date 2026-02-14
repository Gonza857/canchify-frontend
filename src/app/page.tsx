import Link from "next/link";

export default function Home() {
  return (
      <main>
        <h1>Home!</h1>
        <div className={"flex flex-col gap-2"}>
            <Link href={"/configuracion"}>
                Click para ver tu configuración
            </Link>
            <Link href={"/usuario"}>
                Click para ver info de usuarios
            </Link>
        </div>
      </main>
  );
}
